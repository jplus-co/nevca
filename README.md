# NEVCA
A WordPress theme for the New England Venture Capital Association.

### Getting Started
- Set up a local instance of WordPress
- Install and activate theme dependencies:
  - Timber
  - Advanced Custom Fields
  - Custom Post Type UI
- Create a symlink to the built theme folder
```sh
# With a local WP install in
# ~/Documents/Sites/wordpress
# and this repo on your desktop:
ln -s ~/Desktop/nevca/build ~/Documents/Sites/wordpress/wp-content/themes/nevca
```
### Install dependencies:
```
yarn
```
### Start development server
```
yarn start
```
The project will be launched at http://localhost:3000/
### Build for production:
```
yarn build
```
