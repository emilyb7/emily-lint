My preferred eslint config

Bash script means you can run `eslint.sh` from any directory to copy over default settings and install required dependencies.

To set up:

- clone repo
- edit `.eslintrc` file as required
- create a `/bin` in home directory `mkdir ~/bin`
- create `eslint.sh` and copy over the contents of `eslint.sh` from the repo. Replace [PATH_TO_INDEX] with the full pathname for the `index.js` file
- add the following to your `.bash_profile` file: `export PATH=$PATH":$HOME/bin"`
- run `chmod +x bin/eslint.sh` to make the file executable
