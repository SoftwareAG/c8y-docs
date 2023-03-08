# Python scripts

## translationtool.py

Execute `cd scripts` from the c8y-docs directory.
In the scripts directory, then execute `python3 translationtool.py`.

This program can either remove helptexts from the frontmatter headers in the entire content or just in the german benutzerhandbuch.
It can also replace english aliases in the german benutzerhandbuch with german ones. 

After removing helptexts, the files are changed on your local disc. To restore the branch, execute `git reset --hard` after you have copied and sent out the translation files.

## german-translations.txt

Execute by copying the command and executing it _not_ in `/c8y-docs/scripts`, but in `/c8y-docs` from your shell.
The `\` linebreak may not work for windows, replace occurrences with a `^`.
