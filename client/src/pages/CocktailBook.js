import React from "react";
import Cocktails from "../components/Cocktails/Cocktails";
import Hero from "../components/Hero/Hreo";
import ShopContext from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import SortCocktailsButtons from "../components/SortCocktailsButtons/SortCocktailsButtons";

const CocktailBook = () => {
  const { data, setLoading, setPageNumber, cocktailBook } = useContext(
    ShopContext
  );

  const [cocktailBookList, setCocktailBookList] = useState([cocktailBook]);
  useEffect(() => {}, []);

  const sortProducts = (sortBy) => {
    setLoading(true);
    console.log("sortProducts", sortBy);
    let arr = [...cocktailBookList];
    console.log("arr", arr);
    switch (sortBy) {
      case "Percentage, low to high":
        setCocktailBookList(arr.sort((a, b) => a.Percent - b.Percent));
        break;
      case "Percentage, high to low":
        setCocktailBookList(arr.sort((a, b) => b.Percent - a.Percent));
        break;
      case "Alphabetically, A-Z":
        setCocktailBookList(arr.sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case "Alphabetically, Z-A":
        setCocktailBookList(arr.sort((a, b) => b.title.localeCompare(a.title)));
        break;
      case "Price, low to high":
        setCocktailBookList(arr.sort((a, b) => a.price - b.price));
        break;
      case "Price, high to low":
        setCocktailBookList(arr.sort((a, b) => b.price - a.price));
        break;
      case "volume, high to low": // volume
        setCocktailBookList(arr.sort((a, b) => a.volume - b.volume));
        break;
      case "volume, low to high":
        setCocktailBookList(arr.sort((a, b) => b.volume - a.volume));
        break;
      default:
        setCocktailBookList(arr.sort((a, b) => a.id - b.id));
        break;
    }
    setPageNumber(0);
    setLoading(false);
  };

  const [tags, setTags] = useState([]);
  const [alchol, setAlcohol] = useState([]);

  useEffect(() => {
    //config tags
    console.log("alchol", alchol);
    let arr = [...cocktailBook];
    let tags = [];
    let alcohol = [];
    arr.map((item) => {
      console.log("item", item);
      if (item.tags) {
        item.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag);
          }
        });
        item.Ingredients.forEach((alcoholIngredients) => {
          if (alcoholIngredients) {
            if (!alcohol.includes(alcoholIngredients.type)) {
              alcohol.push(alcoholIngredients.type);
            }
          }
        });
      }
    });
    let i = 0;
    console.log("alcohol", alcohol);
    const tagsArrObjct = [];
    tags.forEach((tag) => {
      tagsArrObjct.push({
        name: tag,
        flag: false,
        id: i
      });
      i++;
    });
    console.log("tagsArrObjct", tagsArrObjct);
    setTags(tagsArrObjct);
    const alcoholArrObjct = [];
    alcohol.forEach((alcohol) => {
      alcoholArrObjct.push({
        name: alcohol,
        flag: false,
        id: i
      });
      i++;
    });
    console.log("alcoholArrObjct", alcoholArrObjct);
    setAlcohol(alcoholArrObjct);
    console.log("alcohol", alcohol);
    console.log("tags", tags);
    setCocktailBookList(cocktailBook);
  }, [cocktailBook]);

  /*
  ======================================================
  ======================================================
  */

  useEffect(() => {
    let tagsVelToFilter = ArrToSelectedValues(tags);
    let alcoholVelToFilter = ArrToSelectedValues(alchol);
    let arrOutcome = [];
    cocktailBook.filter((drink) => {
      let flag = false;

      drink.Ingredients.forEach((alcoholIngredients) => {
        if (alcoholIngredients) {
          if (alcoholVelToFilter.includes(alcoholIngredients.type)) {
            flag = true;
          }
        }
        if (!flag) {
          let ver = drink.tags.length;
          if (ver !== 0) {
            drink.tags.forEach((tag) => {
              if (tagsVelToFilter.includes(tag)) {
                flag = true;
              }
            });
          }
        }
        if (flag) {
          if (!arrOutcome.includes(drink)) {
            arrOutcome.push(drink);
          }
        }
      });
    });
    setCocktailBookList(arrOutcome);
    console.log("cocktailBookList useEffect", cocktailBookList);
  }, [tags, alchol]);

  const ArrToSelectedValues = (arr) => {
    let selectedValues = [];
    arr.forEach((item) => {
      if (item.flag) {
        selectedValues.push(item.name);
      }
    });
    return selectedValues;
  };

  /* ======================================================
 
  ======================================================*/

  /*======================================================
  ==handle clike========handle clike=======handle clike====
  ======================================================*/

  const filterArreysToArrOfVal_teg = (teg, flag) => {
    console.log("filterArreysToArrOfVal_", "alchol_", teg, "flag", flag);
    setTags(changeCheckbox(tags, teg, !flag));
  };

  const filterArreysToArrOfVal_ALco = (alchol_, flag) => {
    console.log("filterArreysToArrOfVal_", "alchol_", alchol_, "flag", flag);
    setAlcohol(changeCheckbox(alchol, alchol_, !flag));
  };

  const changeCheckbox = (arr, targetStr, flag) => {
    let arr_return = [];
    let i = 0;
    arr.forEach((item) => {
      if (item.name === targetStr) {
        item.flag = flag;
      }
      if (item.flag) {
        i++;
      }
      arr_return.push(item);
    });
    return arr_return;
  };
  /*======================================================/*/
  const existsCheck = () => {
    return cocktailBookList.length > 0 ? cocktailBookList : cocktailBook;
  };

  return (
    <div>
      <Hero title="coctil book" sort={true} />
      <div>
        <SortCocktailsButtons
          arrayOfValues={tags}
          title={"tags"}
          handle={filterArreysToArrOfVal_teg}
        />
        <SortCocktailsButtons
          arrayOfValues={alchol}
          title={"alchol"}
          handle={filterArreysToArrOfVal_ALco}
        />
      </div>
      <Cocktails cocktails={existsCheck()} />
    </div>
  );
};
export default CocktailBook;
