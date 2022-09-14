import json

def shdwFilesToHTML(dir, tag):
    input_file = open(dir)
    json_array = json.load(input_file)
    canvas_list = []
    button_list = []
    for index, element in enumerate(json_array):
        print(element)
        element_id = element.split('/')
        canvas = '<img src="'+element+'" id="'+tag+'-'+element_id[-1].replace('.png','')+'" class="'+tag+'"/>'
        button = '<div onClick="'+"toggleVisibility('"+tag+'-'+element_id[-1].replace('.png','')+"'"+');" ><img src="'+element+'"/></div>'
        canvas_list.append(canvas)
        button_list.append(button)
    f = open(tag+'.html','w')
    for x in canvas_list: f.write(x+ '\n') 
    for y in button_list: f.write(y+ '\n')
        
    
# shdwFilesToHTML(r"C:/Users/domin/OneDrive/Desktop/Source Code/milady-boutique/assets/shadowDrive/shdw-files-auras.json", 'auras') 
shdwFilesToHTML(r"C:/Users/domin/OneDrive/Desktop/Source Code/milady-boutique/assets/shadowDrive/shdw-files-background.json", 'background') 
