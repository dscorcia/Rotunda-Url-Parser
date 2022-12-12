# Rotunda Challenge

## URL Parser Exercise:
We need some logic that extracts the variable parts of a url into a hash. The keys of the extract hash will be the "names" of the variable parts of a url, and the values of the hash will be the values. We will be supplied with:
1. A url format string , which describes the format of a url. A url format string can contain constant parts and variable parts, in any order, where "parts" of a url are separated with "/". All variable parts begin with a colon. Here is an example of such a url format string: ``` '/:version/api/:collection/:id' ```
2. A particular url instance that is guaranteed to have the format given by the url format string. It may also contain url parameters. 
* For example:
    * Given the example url format string above, the url instance might be: `` '/6/api/listings/3?sort=desc&limit=10' ``
    * Given this example url format string and url instance, the hash we want that maps all the variable parts of the url instance to their values would look like this:
    ```
    {
        version: 6,
        collection: 'listings',
        id: 3,
        sort: 'desc',
        limit: 10
    }
    ```

Please implement a solution to this problem in JavaScript with attention to code
structure and readability. Feel free to use low-level libraries like Lodash.

# How to run the project
 * 1. First of all, please clone the or download the project from the repository.
 * 2. Move to the path where you clone/download the project:
    `` cd Challenge-Rotunda-URL-Parser``
 * 3. Install NPM dependencies:
    `` npm i  ``
 * 4. Run the project:
    `` npm start ``
 * 5. Check results on the terminal

# Comments
* If you want to try with anothers urls, please modify the .env file
* I implemented two helpers
    * parseQuery: this function helps to parse the query params in the url
    * parseUrl: this function helps to parse the rest of the url(first part) and add the query params