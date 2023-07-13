let arr = ["Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
    "I'd tell you a joke about NAT but I would have to translate.", "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
    "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
    "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
    "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
    "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
    "// This line doesn't actually do anything, but the code stops working when I delete it.",
    "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
    "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
    "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
    "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
    "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
    "Your mama's so FAT she can't save files bigger than 4GB."]

const btn = () => {
    document.getElementById("joke").innerHTML = arr[(Math.floor(Math.random() * arr.length))]
}

