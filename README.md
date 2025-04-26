# Odisha AI Website
This website is built using [Tabi](https://welpo.github.io/tabi/) theme for [Zola](https://www.getzola.org/).

## Installation

1. Install Zola from [here](https://www.getzola.org/documentation/getting-started/installation/).
2. Clone this repository.
    ```bash
    git clone https://github.com/odisha-ml/website.git
    cd website
    git clone https://github.com/welpo/tabi.git themes/tabi
    ```
3. Run `zola serve` to start the development server.
4. Open `127.0.0.1:1111` in your browser. Note that `localhost` is not supported.

## Contributing

* Contributions are welcome! Please open an issue or submit a pull request.
### Changing the HTML files
* If you want to change anything in the template HTML files, please make the changes in the `/templates` directory. 
* If the file is not present in the directory then copy it from the `/themes/tabi/templates` directory to the `/templates` directory. Please never make the changes in the `/themes/tabi/templates` directory. 
* As it will be easy to get the updates from the Tabi theme easier.

### Creating a new page
To add new content, create a new file in the `content` directory with the appropriate metadata. For example, to add a new page called "About", create a file called `about.md` in the `content` directory with the following content:

```markdown
+++
title = "About"
description = "About the Odisha AI community."
date = 2024-07-22
+++
```
There is no need to write anything on HTML, CSS, or JavaScript. The content is written in Markdown. You can use any Markdown editor to create the content.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Page Score
### Mobile
![Page Score Mobile](/static/images/page-score-mobile.webp)
### Desktop
![Page Score Desktop](/static/images/page-score-desktop.webp)