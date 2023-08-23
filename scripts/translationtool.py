import os
import pathlib
import frontmatter
import re
import string

class TranslationTool():
    def __init__(self):
        self.__programs = [
            {
                "description" : "Remove helptexts in content",
                "call" : self.remove_helptexts_from_content
            },
            {
                "description" : "Remove helptexts only in content/benutzerhandbuch",
                "call" : self.remove_helptexts_from_benutzerhandbuch
            },
            {
                "description" : "Replace english aliases with german ones in the german files",
                "call" : self.replace_aliases
            },
            {
                "description" : "Generate heading labels for headings that don't have them yet",
                "call" : self.generate_heading_labels
            },
        ]

        self.crosses()
        self.welcome()

        i = self.select_program(self.__programs)
        self.__programs[i]["call"]()

    def crosses(self):
        print("#" * 72)

    def welcome(self):
        print("# Welcome! With this you can remove unwanted helptext fields from your frontmatter headers.")
        self.skipline()

    def skipline(self):
        print("")

    def select_program(self, programs):
        print("# What do you want to do?")
        self.skipline()
        for i, l in enumerate(programs):
            print(i, ":", l["description"])
        self.skipline()
        selection = input("# Please select a program: ")
        self.skipline()
        p = programs[int(selection)] if (int(selection) <= len(programs)) else -1

        if (p==-1):
            print("You didn't select a program from the list, please try again...")
            p = self.select_program(programs)
        else:
            print("You selected:", p["description"])
        self.skipline()
        return int(selection)


    def remove_helptexts_from_content(self):
        print("removing from content")
        dirpath = os.path.join("..", "content")
        pathlist = pathlib.Path(dirpath).rglob('*.md')
        for path in pathlist:
             print(path)
             path_string = str(path)
             self.crosses()
             print("looking at file:", path)
             self.process_markdown(path_string, dir)
             self.crosses()

    def remove_helptexts_from_benutzerhandbuch(self):
        print("removing from benutzerhandbuch")
        dirpath = os.path.join("..", "content", "benutzerhandbuch")
        pathlist = pathlib.Path(dirpath).rglob('*.md')
        for path in pathlist:
             path_string = str(path)
             self.crosses()
             print("looking at file:", path)
             self.process_markdown(path_string, dir)
             self.crosses()

    def replace_aliases(self):
        print("replacing aliases in /benutzerhandbuch")
        dirpath = os.path.join("..", "content", "benutzerhandbuch")
        pathlist = pathlib.Path(dirpath).rglob('*.md')
        for path in pathlist:
             path_string = str(path)
             self.crosses()
             print("looking at file:", path)
             self.process_aliases(path_string, dir)
             self.crosses()

    def process_markdown(self, path_string, dir):
        file = open(path_string, 'r')
        file_name = os.path.basename(file.name).split(".")[0]
        fm = frontmatter.load(path_string)
        if("helpcontent" in fm.keys()):
            helpcontent = fm.metadata.pop("helpcontent")
            print("")
            print("removed this helpcontent:")
            print(helpcontent)
            print("")
            file = open(path_string, 'w+', encoding='utf8')
            file.write(frontmatter.dumps(fm))

    def process_aliases(self, path_string, dir):
       file = open(path_string, 'r')
       file_name = os.path.basename(file.name).split(".")[0]
       fm = frontmatter.load(path_string)
       string_users_guide = "users-guide"
       string_benutzerhandbuch = "benutzerhandbuch"
       de_suffix = "-de"
       if("aliases" in fm.keys()):
           aliases = fm.metadata["aliases"]
           print("here are the aliases:")
           print(aliases)
           for i in range(len(aliases)):
               print("alias #" + str(i + 1), aliases[i])
               if string_users_guide in aliases[i]:
                   alias_parts = aliases[i].split("/")
                   print("alias parts of ", aliases[i])
                   print(alias_parts)
                   if alias_parts[1] == string_users_guide:
                       alias_parts[1] = string_benutzerhandbuch
                       alias_parts[2] += de_suffix
                       aliases[i] = "/".join(alias_parts)
                   print("changed aliases:")
                   print(aliases)
                   print("making aliases unique:")
                   unique_aliases = self.unique_list(aliases)
                   print(unique_aliases)
                   fm["aliases"] = unique_aliases
                   file = open(path_string, 'w+', encoding='utf8')
                   file.write(frontmatter.dumps(fm))

    def generate_heading_labels(self):
        content_section = "device-management-application"
        print("adding heading labels to " + content_section)
        dirpath = os.path.join("..", "content", content_section)
        pathlist = pathlib.Path(dirpath).rglob('*.md')
        #dirpath = os.path.join("..", "content", "device-management-application", "grouping-devices-bundle", "managing-devices-in-groups.md")
        #self.process_headings(dirpath, dir)
        for path in pathlist:
             path_string = str(path)
             self.crosses()
             print("looking at file:", path)
             self.process_headings(path_string, dir)
             self.crosses()

    def process_headings(self, path_string, dir):
       file = open(path_string, 'r')
       file_name = os.path.basename(file.name).split(".")[0]
       md = file.read()
       md = re.sub(r'(\[[^][]*]\([^()]*\))|^(#+)(.*)', lambda x: x.group(1) if x.group(1) else x.group(2) + self.format_heading(x.group(3)), md, flags=re.M)
       print(md)
       file = open(path_string, 'w')
       file.write(md)

    def format_heading(self, heading):
        if "{#" in heading:
            print(heading, "contains a label")
            return heading
        else:
            heading = heading[1:]
            lowercase_heading = heading.lower()
            print(lowercase_heading)
            cleaned_heading = lowercase_heading
            bad_characters = list(string.punctuation)
            for j in bad_characters:
                cleaned_heading = cleaned_heading.replace(j, '')
            print(cleaned_heading)
            hyphencase_heading = cleaned_heading
            for i in string.whitespace:
                hyphencase_heading = hyphencase_heading.replace(i, '-')
            print(hyphencase_heading)
            return_heading = heading + " {#" + hyphencase_heading + "}"
            print(return_heading)
            return " " + return_heading

    def unique_list(self, list):
        output = []
        for x in list:
            if x not in output:
                output.append(x)
        return output

h = TranslationTool()
