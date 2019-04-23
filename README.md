

<p align="center"><img src="https://i.imgur.com/5l8z5nv.png" width="95%" align="center"></p>

<p align="center">'BOLD' and 'Colorful', both of which are made with Agility Design.<br>Source code can be found <a href="https://github.com/madstk1/agility-design/tree/master/made-with-agility/">here.</a><br>To see the examples yourself, click <a href="https://madstk1.github.io/agility-design/">here.</a></p>

# Agility Design
Agility Design is a mobile-first HTML, CSS, and JavaScript framework to create themed websites. While it is influenced by Bootstrap 4 and Foundation, it also combines different aspects into a more uniform framework.

## Getting Started

To start using Agility Design, simply link the `.css`-file to your `.html`-file.

```
<link rel="stylesheet" href="https://madstk1.github.io/agility-design/css/agility-design.min.css">
```
  
To add a skin, link the skin-in-questions's `.css`-file to your `.html`-file, as well. All the available skins can be found in the `css/skins/`-folder.

```
<link rel="stylesheet" href="https://madstk1.github.io/agility-design/css/skins/default.css">
```

For more advanced features, like animation-groups or closable alerts, the included JS file and a modern version of jQuery must be linked.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://madstk1.github.io/agility-design/js/agility-design.js"></script>
```

## Building

It is also possbile to build your own version of Agility Design, if you so desire.

### Prerequisites

To build Agility Design, you have to have `Less` and `Clean-CSS` installed via `npm`. If not already installed, run the following command:

```
# npm install -g less less-plugin-clean-css
```

### With Clean-CSS optimization

To compress the entire library into a single `.css`-file, run the included `build.sh` script:

```
$ ./build.sh
```

### Without Clean-CSS optimization

If you do not want to use the Clean-CSS library, building will still be possible, but with a potential performance penalty. To build without Clean-CSS, run the following command inside the root of the project.

```
$ ./build.sh --without-cleancss
```

## Usage

For examples and how to use Agility Design, check the wiki pages in this GitHub project. Examples can also be found in the [examples/](https://github.com/madstk1/agility-design/tree/master/examples)-folder
