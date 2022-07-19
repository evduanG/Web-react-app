// server/index.js

const path = require("path");
const express = require("express");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();
const cors = require("cors");
const { send } = require("process");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
const initialTodos = [
  {
    id: 1,
    title: "Throw garbage",
    completed: false,
  },
  {
    id: 2,
    title: "Wash the dishes",
    completed: false,
  },
];
const store = {
  async read() {
    try {
      await fs.access(fileName);
      this.todos = JSON.parse((await fs.readFile(fileName)).toString());
    } catch (e) {
      this.todos = initialTodos;
    }
    return this.todos;
  },
  async save() {
    await fs.writeFile(fileName, JSON.stringify(this.todos));
  },
  async getIndexById(id) {
    try {
      const todos = await this.read();
      return todos.findIndex((todo) => todo.id === +id);
    } catch (e) {
      console.log(e);
    }
  },
  async getNextTodoId() {
    let maxId = 1;
    const todos = await this.read();
    todos.forEach((todo) => {
      if (todo.id > maxId) maxId = todo.id;
    });
    return maxId + 1;
  },
  todos: [],
};
/*===================================================================
======get all data====get all data====get all data==get all data=====
====================================================================*/
app.get("/api", (req, res) => {
  fs.readFile("./server/Data.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});
/*===================================================================
======get all data type =====================get all data type=======
====================================================================*/
app.get("/alcoholCatgury", (req, res) => {
  //will return a Menu of alcohol
  fs.readFile("./server/alcoholCatgury.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const catgurys = JSON.parse(data);
      res.send(catgurys);
    }
  });
});
app.get("/cocktailBook", (req, res) => {
  //will return a All cocktails
  fs.readFile("./server/cocktailBook.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});

/**
 *
 */
app.get("/alcohol", (req, res) => {
  //will return a All alcohol bottles products
  fs.readFile("./server/alcohol.json", "utf8", (err, data) => {
    if (err) console.log("error!");
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});
/*===================================================================
======get by id ==get by id ==get by id ==get by id ==get by id =====
====================================================================*/
/**
 *
 */
app.get("/alcohol/:id", (req, res) => {
  //will return a One product or "no alcohol" status 415
  fs.readFile("./server/alcohol.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const id = Number(req.params.id);
      const alcohol = JSON.parse(data).find((item) => {
        return item.id === id;
      });
      console.log(alcohol);
      if (!alcohol) {
        console.log("no alcohol");
        res.status(415).send("no alcohol");
      } else {
        res.send(alcohol);
      }
    }
  });
});
//http://localhost:5000/cocktailBook/11028
/**
 *
 */
app.get("/cocktailBook/:id", (req, res) => {
  //will return a One cocktail or "no alcohol" status 415
  fs.readFile("./server/cocktailBook.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const cocktail = JSON.parse(data).find((item) => {
        return item.id === req.params.id;
      });
      console.log(cocktail);
      if (!cocktail) {
        console.log("no cocktail");
        res.status(415).send("no cocktail");
      } else {
        res.send(cocktail);
      }
    }
  });
});
/*===================================================================
====get search ==get search==get search==get search==get search =====
====================================================================*/
/**
 * @pram q = Search string
 *
 * @pram  category =alcohol
 * @retun All products whose title contains the q
 * @pram category =cocktail
 * @retun All cocktail whose title contains the q
 * @pram category =default
 * @retun All cocktail/products whose title contains the q
 *
 * @retun NOT FOND  ==  status 415 ,"No results"
 */
app.get("/search?", (req, res) => {
  const filter_arr = (data, qa) => {
    console.log("filter_arr 2");
    return data.filter((item) => {
      return item.title.toLowerCase().includes(qa);
    });
  };
  let ans = [];
  fs.readFile("./server/Data.json", "utf8", (err, data) => {
    console.log(req.query.category);
    if (err) console.log("error!", err);
    if (data) {
      switch (req.query.category) {
        case "alcohol":
          ans = filter_arr(JSON.parse(data).alcohol, req.query.q.toLowerCase());
          break;
        case "cocktail":
          ans = filter_arr(JSON.parse(data).alcohol, req.query.q.toLowerCase);
          break;
        default:
          console.log(
            filter_arr(
              [...JSON.parse(data).alcohol, ...JSON.parse(data).cocktailBook],
              req.query.q.toLowerCase()
            )
          );
          ans = filter_arr(
            [...JSON.parse(data).alcohol, ...JSON.parse(data).cocktailBook],
            req.query.q.toLowerCase()
          );
          break;
      }
      console.log("a switch 3");
      console.log("ans ");
      if (!ans.length) {
        console.log("!ans.length");
        res.status(415).send("No results");
      } else {
        res.send(ans);
      }
    }
  });
});
/**
 * @pram type = alchol type vodka / rum /..
 * @retun All products whose subcategory=type
 * @retun NOT FOND  ==  status 415 ,"No results"
 */
app.get("/subcategory/:type", (req, res) => {
  //will return a Menu of alcohol
  fs.readFile("./server/alcohol.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const type = req.params.type.toLowerCase();
      let ans = JSON.parse(data).filter((item) => {
        console.log(item.subcategory, item.id);
        return item.subcategory.toLowerCase() === type;
      });

      if (!ans.length) {
        res.status(415).send("No results");
      } else {
        res.send(ans);
      }
    }
  });
});
/*===================================================================
==== get user config ===== get user config ===== get user config =====
====================================================================*/
/**
 *
 */
app.get("/userAuthentication?", (req, res) => {
  fs.readFile("./server/user.json", "utf8", (err, data) => {
    if (err) console.log("error!", err);
    if (data) {
      const email = req.query.email;
      const ps = req.query.ps;
      console.log("email", email, "ps", ps);
      console.log(req.query);
      const user_config = JSON.parse(data).find((user) => {
        return user.email === email;
      });
      if (user_config) {
        if (user_config.password === ps) {
          res.status(200).json("felse", user_config);
        } else {
          res.status(415).send("");
        }
      } else {
        res.status(415).send("");
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
