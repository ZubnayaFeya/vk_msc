import os
import json


filepath = "/home/dl/PycharmProjects/music/my_music.json"
# filepath = os.getcwd() + "my_music"


with open(filepath, "r") as f:
    #data = f.read()
    #print(data)
    dict_msc = json.load(f)
    print(type(dict_msc))


