import os
import pathlib
import frontmatter

class HelptextRemover():
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
        dirpath = "content"
        pathlist = pathlib.Path(dirpath).rglob('*.md')
        for path in pathlist:
             path_string = str(path)
             self.crosses()
             print("looking at file:", path)
             self.process_markdown(path_string, dir)
             self.crosses()

    def remove_helptexts_from_benutzerhandbuch(self):
        print("removing from benutzerhandbuch")
        dirpath = os.path.join("content", "benutzerhandbuch")
        pathlist = pathlib.Path(dirpath).rglob('*.md')
        for path in pathlist:
             path_string = str(path)
             self.crosses()
             print("looking at file:", path)
             self.process_markdown(path_string, dir)
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


        if (file_name == "combine-analytics"):
            print("yay")
            print(fm.keys())
            print(sorted(fm.keys()))
            print(fm.metadata)
            print(fm["title"])
            print(fm.content)

h = HelptextRemover()
