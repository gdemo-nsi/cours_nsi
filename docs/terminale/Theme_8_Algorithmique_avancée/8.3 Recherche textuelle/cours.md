# Recherche textuelle


## 1. Recherche naïve

!!! tip "Illustration de l'algorithme"
    Le meilleur algorithme de recherche textuelle de tous les temps :  

    ![cult of the lamb ctrl f](image.png)

En réalité, un algortime est bel est bien implémenté derrière ce simple `ctrl+f`.  
Commençons par le plus simple, rechercher naïvement le mot en regardant chaque lettre une à une :  

> &rarr; 1) Recherche naïve : [Lien vers déroulement](https://idf-75-sud.elea.apps.education.fr/mod/resource/view.php?id=22919)

<div style="page-break-after: always;"></div>


**Principe général :**

```
    | Tant que la différence entre la taille du motif et la 
    | taille du texte est supérieur à l'indice courant :

        | Tant que la taille du motif est supérieur à l'indice 
        | de correspondance et qu'il correspond à la lettre du motif recherché :  

            | On incrémente l'indice de correspondance.

        | Si l'indice de correspondance correspond à la taille du motif :

            | On stocke la position de l'indice courant.

        | On incrémente l'indice courant.

    | On retourne toutes les positions stockées.

```

!!! exercice "Exercice 1"
    Programmez cette recherche à l'aide des codes à trou (cf : éléa > [Exercice 1 - Recherche naïve](https://idf-75-sud.elea.apps.education.fr/pluginfile.php/38814/mod_resource/content/2/exercice_1_recherche_naive.pdf))

### 1.1 Premier algorithme



!!! success "Algorithme de recherche naïve :heart:"
    
    ```python linenums='1'
    def recherche_naive(texte, motif):
        '''
        renvoie la liste des indices (éventuellement vide) des occurrences de
        de la chaîne `motif` dans la chaîne `texte`.
        '''
        indices = []
        i = 0 # indice courant
        while i <= len(texte) - len(motif):
            k = 0 # indice de position
            while k < len(motif) and texte[i+k] == motif[k]:
                k += 1
            if k == len(motif):
                indices.append(i)
            i += 1

        return indices
    
    ```
    > &rarr; Quelle est la complexité de cet algorithme ?    

### 1.2 Recherche concrètre : Application à la recherche d'un motif dans un roman

Le [Projet Gutenberg](https://www.gutenberg.org/browse/languages/fr){. target="_blank"} permet de télécharger légalement des ouvrages libres de droits dans différents formats.

Nous allons travailler avec le Tome 1 du roman *Les Misérables* de Victor Hugo, à télécharger &rarr; [ici](https://www.gutenberg.org/cache/epub/17489/pg17489.txt) au format ```txt```. 

#### 1.2.1 Récupération du texte dans une seule chaîne de caractères

```python linenums='1'
with open('les_Miserables.txt', encoding="utf-8") as f:
    roman = f.read()
```

#### 1.2.2 Vérification et mesure du temps de recherche

!!! exercice "Exercice 2 - Calcul de temps"
    
    À l'aide du module ```time```, mesurer le temps de recherche dans Les Misérables :  
    - d'un mot court `"maison"`, 
    - d'une longue phrase (présente dans le texte) `"Mes amis, retenez ceci, il n'y a ni mauvaises herbes ni mauvais hommes. Il n'y a que de mauvais cultivateurs."`, 
    - d'un mot qui n'existe pas. 

    Temps mot cours =  

    Temps phrase =  

    Temps mot inconnu = 

    > &rarr; Que remarquez-vous ?  
    
    
   
On peut légérement optimiser cette algorithme.  
> &rarr; Mais comment faire ? A vos papiers !

<div style="page-break-after: always;"></div>

## 2. Vers l'algorithme de Boyer-Moore-Horspool : et si on partait à l'envers ?

> &rarr; 2) Recherche à l'envers : [Lien vers déroulement](https://idf-75-sud.elea.apps.education.fr/mod/resource/view.php?id=22919)

!!! exercice "Exercice 3 - recherche à l'envers"


    Re-écrire l'algorithme de recherche naïve mais en démarrant de la fin du **motif** et non du début. 


!!! success "Correction" 
    ```python linenums='1'
    def recherche_naive_inverse(texte, motif):
        indices = []
        i = 0
        while i <= len(texte) - len(motif):
            k = len(motif)-1
            while k >= 0 and texte[i+k] == motif[k]:
                k -= 1
            if k == -1:
                indices.append(i)
            i += 1

        return indices
    ```      




## 3. Algorithme de Boyer-Moore-Horspool

### 3.1 Principe
L'idée est d'améliorer le code précédent (celui on parcourt le motif à l'envers) en **sautant** directement au prochain endroit potentiellement valide. 

Pour cela on regarde le caractère `X`  du texte sur lequel on s'est arrêté :

- si ```X``` n'est pas dans le motif, il est inutile de se déplacer "de 1" : on tomberait sur `X + 1`.  
&rarr; Donc on se décale de `X` (juste assez pour dépasser ```X```).  

- si ```X``` est dans le motif, on va regarder la place de la dernière occurence de ```X``` dans le motif et de déplacer de ce nombre, afin de faire coïncider le ```X``` du motif et le ```X``` du texte.

> &rarr; 3) Recherche à l'envers : [Lien vers déroulement](https://idf-75-sud.elea.apps.education.fr/mod/resource/view.php?id=22919)

<div style="page-break-after: always;"></div>

### 3.2 Implémentation

#### 3.2.1 Fonction préparatoire
On va d'abord coder une fonction ```pre_traitement``` qui prend en paramètre un mot ```mot``` et qui renvoie un dictionnaire associant à chaque lettre de ```mot``` sa dernière occurence dans ```mot```.  
On exclut la dernière lettre, qui poserait un problème lors du décalage (on décalerait de 0) 
> &rarr; On appel cette fonction le **pré-traitement**

!!! exercice "Exercice 4"
    Écrire la fonction ```pre_traitement(mot)```.

    *Exemple d'utilisation :*

    ```python
    >>> pre_traitement("MAURIAC")
    {'M': 0, 'A': 5, 'U': 2, 'R': 3, 'I': 4}
    ```

#### 3.2.2 Boyer-Moore-Horspool
  
!!! exercice "Exercice 5"
    Programmez cette recherche à l'aide des codes à trou (cf : éléa > [Exercice 5 - Algorithme Boyer-Moore-Horspool](https://idf-75-sud.elea.apps.education.fr/pluginfile.php/38816/mod_resource/content/1/exercice_5_intro_BMH.pdf)

<div style="page-break-after: always;"></div>


!!! success "Algorithme de Boyer-Moore-Horspool :heart:"
    
    ```python linenums='1'
    def pre_traitement(mot):
        d = {}
        for i in range(len(mot)-1):
            d[mot[i]] = i
        return d

    def BMH(texte, motif):
        dico = pre_traitement(motif)
        indices = []
        i = 0
        while i <= len(texte) - len(motif):
            k = len(motif)-1
            while k >= 0 and texte[i+k] == motif[k]: #(1)
                k -= 1
            if k == -1: #(2)
                indices.append(i)
                i += 1 #(3)
            else:
                if texte[i+k] in dico: #(4)
                    i += max(k - dico[texte[i+k]], 1) #(5)
                else:
                    i += k+1 #(6)

        return indices

```
    1. On remonte le motif à l'envers, tant qu'il y a correspondance
    et qu'on n'est pas arrivés au début du motif.  

    2. Si on est arrivés à la valeur ```k=-1```, c'est qu'on a
    parcouru tout le mot : on l'a donc trouvé.  

    3. On a trouvé le motif, mais attention, il ne faut pas trop se
    décaler sinon on pourrait rater d'autres occurences du moti
    (pensez à la recherche du motif «mama» dans le mot «mamamamama»).
    On se décale donc de 1.  

    4. On s'est arrêté avant la fin, sur une lettre présente dans le
    mot : il va falloir faire un décalage intelligent.  

    5. On décale juste de ce qu'il faut pour mettre en correspondance
    les lettres, en faisant attention à ne pas décaler d'un nombre
    négatif. Au pire, on décale de 1.  

    6. La lettre n'est pas dans le motif : on se positionne juste à sa droite.
```

   

!!! note "Exercice 6 - Calcul de temps"
    

    Reprendre les mesures effectuées sur Les Misérables, mais cette fois avec l'algorithme BMH.  

    Temps mot cours =  

    Temps phrase =  

    Temps mot inconnu = 

    > &rarr; Que remarquez-vous ?  

On constate quelque chose de remarquable (et qui peut être à première vue contre-intuitif) : 

**Plus le motif recherché est long, plus la recherche est rapide**.   

> &rarr; Quelle est la complexité de cet algorithme ?


        