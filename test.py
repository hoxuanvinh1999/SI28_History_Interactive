#commence à jouer au tennis en club

from matplotlib.pyplot import pink

class Person:
    def __init__(self, name, age):
        self.age = age
        self.name = name

    def get_data(self):
        print("I am ", self.name)

def FonctionNiveauTennis():
    print("Tennis")
    motivation = 50
    age = 12
    niveau = 50
    budget = 500
	

    for i in range(32-age):
        motivation = motivation*0.90;  
        if motivation>40 and  budget==500 :
            niveau += 1	
        if motivation < 20:
            niveau = niveau 
    print("--------------------------------------------")
    return(niveau)

def souvenir_travail():
    print("Travail")
    #début de la journée
    t=0  #nbr heure de travail
    a=0 #heure avec ses amis
    t_travail = 8
    while t < t_travail:
        t+=1 
        print( "Aujourd’hui tu as travaillé: ", t , " heures")
    if t<8:
        a=8-t
        print("Tu as pu alors voir: ", a ," heures tes amis")

    
    if(t == 8):
        print("burn out une fois dans l’école car loin de chez lui et trop de travail (illustration de dépression")
    if(t==4):
        print("Il sort beaucoup plus avec ses ami(e)s mais lors d’une soirée à l’origine de Nadem ils ont un peu trop bu et reprennent le volant et ils ont un accident")
    if t_travail == 8 :
        print ("Bravo tu as réussi ton concours") 
    elif t_travail <= 6:
        print ("Tu as raté ton concours") 
    print("--------------------------------------------")
    return 0

def souvenir_family():
    print("Family")
    t=5 
    # (nombre entre 0 et 10) #heure quotidien passé dans sa chambre sur son ordi
    f=100-10*t
    #dégré d’intégration et de cohésion avec sa famille
    mariage = False
    if f >70:
        print("la famille est au coeur de la vie de Nadem, il ne peut pas imaginer sa vie sans")
        if mariage == True:
            f=f+10
            print("le 28 mai 2005 a été l un des plus beau jour de sa vie") 
        else:
            f=f-10
            print ("Leïla est déçue mais finit par comprendre le choix de son frère")
    elif f < 70 and f > 30:
        print ("Nadem entretient des relations correctes avec sa famille mais il n’est pas présent pour les petits plaisirs quotidiens de la vie de famille")
        if mariage == True:
            f=f+10
            print ("Nadem garde un excellent souvenir de ce mariage, il prend conscience de l’importance et la force des relations familiales.")
        else:
            f=f-10
            print ("Le fait que Nadem mette le mariage de sa sœur au second plan, représente la goutte d’eau pour sa famille. Après cet événement, les relations familiales deviennent seulement cordiales")
    else:
        print ("Les relations familiales sont compliquées, ils ne se parlent quasiment plus et le peu de fois où ils se voient, les discussions sont remplies de reproches.")
    
    if mariage == True:
        f=f+10 
        print ("Cet événement marque un tournant dans ses relations familiales. En effet, il reprend contact avec sa famille et ces derniers soulignent le fait que Nadem ait fait un premier pas vers eux pour renouer les liens.")
    else:
        if f>= 10:
            f=f-10
        else:
            f=0
    print ("C’est la dernière tentative que Leïla et le reste de sa famille feront pour essayer de retrouver Nadem et de renouer les liens et lui faire prendre conscience de l’importance des liens familiaux")
    print("--------------------------------------------")
    return 0

def main():
    print(FonctionNiveauTennis())
    souvenir_family()
    souvenir_travail()
    
if __name__ == "__main__":
    main()
