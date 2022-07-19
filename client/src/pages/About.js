import Hero from "../components/Hero/Hreo";

const About = () => {
  return (
    <div>
      <Hero title="About" sort={false} />
      <div className="container">
        <p>
          The site is a site for selling alcohol,. It contains cocktail recipes
          as additional content
        </p>
        <p>
          I needed the page to look full so here are spoilers for famous movies
        </p>
        <p>
          <strong>The Sixth Sense (1999)</strong> Malcolm Crowe (Bruce Willis)
          is a troubled child psychologist tasked with helping Cole Sear (Haley
          Joel Osment), a boy struggling with his ability to communicate with
          the dead. Shockingly, Dr. Crowe was dead the whole time he worked with
          Cole. He was killed by an old patient at the beginning of the movie.
        </p>
        <p>
          <strong>The Mist (2007)</strong> A dangerous storm forces David
          Drayton (Thomas Jane) and his son (Nathan Gamble) to head into town to
          gather supplies. A thick fog engulfs the small Maine town, with a host
          of deadly creatures milling around and killing those who try to
          venture outside. Feeling hopeless, Thomas mercy kills his fellow
          survivors. The army shows up, having eradicated the beasts from the
          town, just a few minutes later.
        </p>
        <p>
          <strong>A Beautiful Mind (2001)</strong> John Nash (Russell Crowe) is
          a remarkable mathematician at MIT with friends Charles (Paul Bettany),
          Parcher (Ed Harris), and Marcee (Vivien Cardone) to support him. He
          takes work as a cryptologist and then gets tapped to do secret
          government work. Paranoia sinks in surrounding his new job and he
          becomes mentally unstable. His wife Alicia (Jennifer Connelly) is told
          that Nash suffers from paranoid schizophrenia and that he has imagined
          three "friends," who have been around since Nash was in graduate
          school.
        </p>
        <p>
          <strong>Black Swan (2010)</strong> Nina Sayers (Natalie Portman) is an
          innocent ballerina selected to play in her company's newest rendition
          of Swan Lake. While Nina's personality is perfect for the role of the
          White Swan, newcomer Lily (Mila Kunis) better captures the darkly
          sexual essence that is the Black Swan. In a twisted
          rivalry/friendship, Nina's obsessive nature gets the best of her and
          she kills Lily the night of the performance. In reality, she doesn't,
          having hallucinated the killing and actually stabbed herself instead.
        </p>
        <p>
          {" "}
          <strong>The Prestige (2006) </strong> Alfred Borden (Christian Bale)
          and Robert Angier (Hugh Jackman) are two magicians dueling to
          determine who is the better of the two. Surprise, both have a little
          extra stored in their respective closets. Borden uses his identical
          twin for his stunts and Angier cloned himself, using a special
          machine, only to kill his clones after successfully performing his
          acts.
        </p>
        <p>
          {" "}
          <strong>American Psycho (2000)</strong> Patrick Bateman (Christian
          Bale) is an attractive businessman who lives a secret life as a
          psychotic serial killer in the late hours of the night. Not only does
          he eventually confess to the murders, but at least one of his supposed
          victims is still alive and well, leading to questions about whom he
          actually killed, if anyone.
        </p>
        <p>
          {" "}
          <strong>Buried (2010)</strong> Paul Conroy (Ryan Reynolds), a truck
          driver in Iraq, awakes inside a coffin with only a lighter and a
          cellphone. Throughout the movie, he maintains contact with Dan Brenner
          (Robert Paterson), leader of a hostage rescue unit. He promises to
          save Conroy, having saved another man named Mark White. Brenner
          informs Conroy that he's found him, only to actually unearth the body
          of White, meaning he had been lying the whole time.
        </p>
        <p>
          {" "}
          <strong>Fight Club (1999)</strong> Tired of a monotonous existence as
          a traveling car company employee, an unnamed narrator (Edward Norton)
          joins an intense, underground fight club led by Tyler Durden (Brad
          Pitt), a hypermasculine soap seller. It's later discovered that Durden
          isn't real, but rather the narrator's imagined alter ego.{" "}
        </p>
      </div>
    </div>
  );
};
export default About;
