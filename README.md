# BE-mongoose-relations

## Preparation

In this repository there is a `package.json` which already contains mongoose and dotenv as dependency.
In `example.js` you will find the starter code to connect to the database.

After cloning run `npm install`.

Create a new text file named `.env` and add to it a line with your database connection

```
MONGO=...
```

## 1 Street Fighter II Moves

Let's define two schemes. One for move and one for character.

Create a file `characterModel.js`.

Moves contain:

-   `name` and `keys` as string (better write them lowercase in the schema)

Characters contain:

-   `name` as string and `specialMoves` as array, whose elements are included from the subschema.

Create a file `writeCharacter.js` (with starter code) to write a character to the database. You should import the model of the character (with `require`).

An example character:

-   name: Ryu.
-   specialMoves:
    -   name: `Hadoken`, keys: `↓ ↘ → P`
    -   name: `Tatsumaki Senpukyaku`, keys: `↓ ↙ ← K`
    -   name: `Shoryuken`, keys: `→ ↓ ↘ → P`

Run your script and see what the saved document looks like in your database (for example, using MongoDB compass).

Create another file `readCharacter.js` (with starter code) to read one or all characters you have saved so far from the database.

## 2 Articles and producers

Let's define two schemes. One for manufacturers and one for articles that contains a reference to their manufacturers.

Create a file `manufacturerModel.js`.

Manufacturers contain:

-   Name, industry as string

**Bonus**: Create a _virtual property_ with a reference to article.

Create another file `articleModel.js`.

Contain article:

-   Description as String, Price as Number and a Manufacturer as reference.

Create a file `writeManufacturer.js` (with starter code) to create multiple manufacturers.

Create also a file `writeArticle.js` (with starter code) to create multiple articles. Use the producers you just created.

Create a file `readArticles.js` to read one or more articles from the database. And let Mongoose load the manufacturer's data using the `populate()` method.

**Bonus**: Create a `readManufacturer.js` file to read one or more manufacturers from the database. And let Mongoose load the data of the items using the `populate()` method.
