# Odias in AI/ML Website
This website is built using [DeepThought](https://github.com/RatanShreshtha/DeepThought) theme for [Zola](https://www.getzola.org/).

## Installation

1. Install Zola from [here](https://www.getzola.org/documentation/getting-started/installation/).
2. Clone this repository.
    ```bash
    git clone https://github.com/odisha-ml/website.git
    ```
3. Run `zola serve` to start the development server.
4. Open `localhost:1111` in your browser.

## Contributing

* Contributions are welcome! Please open an issue or submit a pull request.
### Changing the HTML files
* If you want to change anything in the template HTML files, please make the changes in the `/templates` directory. 
* If the file is not present in the directory then copy it from the `/themes/DeepThought/templates` directory to the `/templates` directory. Please never make the changes in the `/themes/DeepThought/templates` directory. 
* As it will be easy to get the updates from the DeepThought theme easier.

### Creating a snippet to use in the Markdown files
* If you want to create a snippet to use in the Markdown files, please create a new file in the `/templates/shortcodes` directory with the appropriate metadata.
* For example, to create a snippet to use in the Markdown files, create a new file called `youtube.html` in the `/templates/shortcodes` directory with the following content:

```html
{% macro youtube(id) %}
<div class="youtube is-flex is-justify-content-center is-align-items-center">
    <iframe width="848" height="510" src="https://www.youtube.com/embed/{{id}}?rel=0&modestbranding=1" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
</div>
{% endmacro youtube %}
```
* Now you can use the snippet in the Markdown files by using the following syntax:

```markdown
{{ youtube(id="v=PF5DScCr5SI") }}
```

### Creating a new page
To add new content, create a new file in the `content` directory with the appropriate metadata. For example, to add a new page called "About", create a file called `about.md` in the `content` directory with the following content:

```markdown
+++
title = "About"
description = "About the Odias in AI/ML community."
date = 2024-07-22
+++
```
There is no need to write anything on HTML, CSS, or JavaScript. The content is written in Markdown. You can use any Markdown editor to create the content.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.