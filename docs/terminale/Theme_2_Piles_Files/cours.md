
# Listes, piles, files


## 0. Préambule : interface ≠ implémentation :star: :star: :star:

Les structures que nous allons voir peuvent s'envisager sous deux aspects :

- le côté **utilisateur**, qui utilisera une interface pour **manipuler** les données.
- le côté **concepteur**, qui aura choisi une implémentation pour **construire** la structure de données.

!!! note "Un exemple d'interface et d'implémentation"
    - Le volant et les pédales d'une voiture constituent une partie de son **interface**.
    - L'**implémentation** va désigner les mécanismes techniques qui sont mis en œuvre pour que le mouvement de rotation du volant aboutisse à un changement de direction des roues.

    - La standardisation des interfaces fait qu'un utilisateur peut passer sans problème d'une voiture à une autre, même si l'**implémentation** est complètement différente.

    ![](data/voiture.png){: .center width=50%}

Nous avons déjà abordé ces deux aspects lors de la découverte de la Programmation Orientée Objet. Le principe d'encapsulation fait que l'utilisateur n'a qu'à connaître l'existence des méthodes disponibles, et non pas le contenu technique de celle-ci. Cela permet notamment de modifier le contenu technique (l'implémentation) sans que les habitudes de l'utilisateur (l'interface) ne soient changées.

## 1. Structures de données linéaires 

### 1.1 À chaque donnée sa structure

En informatique comme dans la vie courante, il est conseillé d'adapter sa manière de stocker et de traiter des données en fonction de la nature de celles-ci :

- Le serveur d'un café, chargé de transporter les boissons, n'utilisera pas un panier pour faire le transport : il préfèrera un plateau. 
- Le chercheur de champignons, lui, n'utilisera pas un plateau : il préfèrera un panier.
- Pour jouer à Valorant, on préférera utiliser une souris pour viser, plutôt qu'une manette.


> &rarr; De même en informatique, pour chaque type de données, pour chaque utilisation prévue, une structure particulière de données se revèlera (peut-être) plus adaptée qu'une autre.

Nous allons nous intéressé à deux structures de données fondamentales en informatique : les **piles** et les **files**.
<!--    
#### 1.1.1 Données linéaires
Intéressons nous par exemple aux **données linéaires**. Ce sont des données qui ne comportent pas de *hiérarchie* : toutes les données sont de la même nature et ont le même rôle. 
Par exemple, un relevé mensuel de températures, la liste des élèves d'une classe, un historique d'opérations bancaires... 

Ces données sont «plates», n'ont pas de sous-domaines : la structure de **liste** paraît parfaitement adaptée. 

Lorsque les données de cette liste sont en fait des couples (comme dans le cas d'une liste de noms/numéros de téléphone), alors la structure la plus adaptée est sans doute celle du **dictionnaire**.

Les listes et les dictionnaires sont donc des exemples de structures de **données linéaires**.

#### 1.1.2 Données non-linéaires
Même si ce n'est pas l'objet de ce cours, donnons des exemples de structures adaptées aux données non-linéaires :

Si une liste de courses est subdivisée en "rayon frais / bricolage / papeterie" et que le rayon frais est lui-même séparé en "laitages / viandes / fruits & légumes", alors une structure d'**arbre** sera plus adaptée pour la représenter. Les structures arborescentes seront vues plus tard en Terminale.

Enfin, si nos données à étudier sont les relations sur les réseaux sociaux des élèves d'une classe, alors la structure de **graphe** s'imposera d'elle-même. Cette structure sera elle-aussi étudiée plus tard cette année. 


### 1.2 Comment seront traitées ces données linéaires ? Introduction des listes, des piles et des files

La nature des données ne fait pas tout. Il faut aussi s'intéresser à la manière dont on voudra les traiter :

- À quelle position les faire entrer dans notre structure ?
- À quel moment devront-elles en éventuellement en sortir ?
- Veut-on pouvoir accéder rapidement à n'importe quel élément de la structure, ou simplement au premier ? ou au dernier ?

Lorsque ces problématiques d'entrée/sortie n'interviennent pas, la structure «classique» de liste est adaptée. Mais lorsque celle-ci est importante, il convient de différencier la structure de **pile** de celle de **file**.
-->
#### 1.1 Les piles (*stack*)

![image](data/assiettes2.png){: .center width=30%}


Une structure de **pile** (penser à une pile d'assiette) est associée à la méthode **LIFO** (Last In, First Out) :
les éléments sont empilés les uns au-dessus des autres, et on ne peut toujours dépiler que l'élément du haut de la pile. Le dernier élément à être arrivé est donc le premier à être sorti.


![](data/gifpile.webp){: .center}


**Exemples de données stockées sous forme de pile** 

- le *ctrl + z* (ou *ctrl + y*), chaques actions que vous faites sur un navigateur ou logiciel, sont stockées dans une **pile**.  

- lorsque vous faites la vaisselle à la main, la dernière assiette déposée, sera la première lavée.  

- lors de l'exécution d'une *fonction récursive*, le processeur empile successivement les appels à traiter : seule l'instruction du haut de la pile peut être traitée. (Promis, on reviendra dessus :p)

![Fibonacci](data/pile_fibo.webp){: .center}

#### 1.2 Les files (*queue*)

![image](data/queue.png){: .center width=40%}


Une structure de **file** (penser à une file d'attente) est associée à la méthode **FIFO** (First In, First Out) :
les éléments sont enfilés les uns à la suite des autres, et on peut défiler uniquement l'élément du haut de la file.

![file](data/giffile.webp){: .center}

**Exemples de données stockées sous forme de file :** 

- les documents envoyés à l'imprimante sont traitées dans une file d'impression.  
  
- la «queue» à la cantine est (si personne ne gruge) traitée sous forme de file.

!!! tip "A retenir :heart: :"
    - **Pile** : LIFO  (Last In First Out)  
        - *Exemple* : Une pile d'assiette, une pile d'appel.
    - **File** : FIFO  (First In First Out)  
        - *Exemple* : Une file d'attente.


<!--
## 2. Les listes

### 2.1 Définition générale
Une liste est un ensemble ordonné d'objets. Généralement, ces données seront de même type, mais ce n'est pas structurellement obligatoire.

### 2.2 Les listes chaînées *(linked lists)*

![image](data/linked.png){: .center width=40%}


Lorsque l'implémentation de la liste fait apparaître une chaîne de valeurs, chacune pointant vers la suivante, on dit que la liste est une liste **chaînée**.

![](data/listechainee.png){: .center}

**Implémentation choisie :**

- Une liste est caractérisée par un ensemble de cellules.
- Le lien (on dira souvent le «pointeur») de la variable est un lien vers la première cellule, qui renverra elle-même sur la deuxième, etc.
- Chaque cellule contient donc une valeur et un lien vers la cellule suivante.
- Une liste peut être vide (la liste vide est notée ```x``` ou bien ```None``` sur les schémas)

Une conséquence de cette implémentation sous forme de liste chaînée est la non-constance du temps d'accès à un élément de liste : pour accéder au 3ème élément, il faut obligatoirement passer par les deux précédents.

**À retenir :** dans une liste chaînée, le temps d'accès aux éléments n'est pas constant.


### 2.3 Exemple d'implémentation minimale d'une liste chaînée

!!! note "Exemple fondateur : implémentation d'une **liste chainée** en POO :heart:"
    ```python linenums='1'
    class Cellule :
        def __init__(self, contenu, suivante):
            self.contenu = contenu
            self.suivante = suivante
    ```

Cette implémentation rudimentaire permet bien la création d'une liste :


```python
>>> lst = Cellule(3, Cellule(5, Cellule(1,None)))
```

La liste créée est donc :  ![](data/ex1.png) 

Mais plus précisément, on a :

![](data/ex2.png){: .center}

{{initexo(0)}}
!!! exercice "Exercice"

    Retrouvez comment accéder aux éléments 3, 5 et 1.


    ??? success "Correction"
        ```python
        >>> lst.contenu
        3
        >>> lst.suivante.contenu
        5
        >>> lst.suivante.suivante.contenu
        1
        ```         




On pourra remarquer que l'interface proposée à l'utilisateur n'est pas des plus pratiques...

### 2.4 Et les listes de Python ???

Nous connaissons déjà les listes de Python :


```python
>>> maliste = [3, 1, -1, 42]
```

Et nous connaissons aussi (un peu) l'interface de ce type ```list```, notamment avec les méthodes ```append()``` ou ```reverse()```.  
Néanmoins, l'implémentation qui a été choisie par les concepteurs de Python de ce type ```list``` fait que le celui-ci se rapproche plus d'un **tableau dynamique**. 

**Dans un tableau dynamique :**

- le temps d'accès à n'importe quel élément est rapide. Ce temps d'accès est constant quelque soit l'élément : on dit que l'accès est en $O(1)$.
- l'insertion d'un élément au début ou au milieu de la liste est lente : cela oblige à décaler tous les éléments à droite de celui-ci. Le temps pris par l'insertion est proportionnel au nombre d'éléments à déplacer : on dit que l'insertion est en $O(n)$.

**Dans une liste chaînée :**

- le temps d'accès à n'importe quel élément peut être lent (proportionnel à la position de l'élément dans la liste). Le temps d'accès est en $O(n)$.
- l'insertion d'un élément à l'intérieur de la liste est rapide : il y a simplement à modifier la valeur du lien de la cellule à gauche de l'endroit d'insertion. L'action d'insérer est donc en $O(1)$. Toutefois, avant d'arriver à l'endroit d'insertion, il faut avoir parcouru toutes les cellules précédentes ! Le temps total d'insertion est donc lui aussi linéaire, en $O(n)$.

Nous nous servirons parfois du type ```list``` de Python dans la suite de ce cours, mais il ne faut pas oublier qu'il n'est pas un «vrai» type ```list```.

### 2.5 Un exemple d'interface pour les listes

Imaginons que nous possédons une interface offrant les fonctionnalités suivantes :

- ```Liste()``` : crée une liste vide.
- ```est_vide``` : indique si la liste est vide. (renvoie un booléen)
- ```ajoute_tete``` : insère un élément (passé en paramètre) en tête de liste. (ne renvoie rien)
- ```renvoie_tete``` : renvoie la valeur de l'élément en tête de liste ET le supprime de la liste.


!!! exercice "Exercice"

    On considère l'enchaînement d'opérations ci-dessous. Écrire à chaque étape l'état de la liste ```lst``` et la valeur éventuellement renvoyée. On considèrera que la tête de la liste est à gauche.
    ```python
    1. lst = Liste()      
    2. lst.ajoute_tete(3)
    3. lst.ajoute_tete(5) 
    4. lst.ajoute_tete(1) 
    5. lst.renvoie_tete() 
    6. lst.est_vide()     
    7. lst.ajoute_tete(2) 
    8. lst.renvoie_tete() 
    9. lst.renvoie_tete() 
    10. lst.renvoie_tete()
    11. lst.est_vide()    
    ```


    ??? success "Correction"
        ```python
        1. lst = Liste()      # lst = None
        2. lst.ajoute_tete(3) # lst = 3
        3. lst.ajoute_tete(5) # lst = 5 3 
        4. lst.ajoute_tete(1) # lst = 1 5 3
        5. lst.renvoie_tete() # lst = 5 3 valeur renvoyée : 1
        6. lst.est_vide()     # valeur renvoyée : False
        7. lst.ajoute_tete(2) # lst = 2 5 3
        8. lst.renvoie_tete() # lst = 5 3 valeur renvoyée : 2
        9. lst.renvoie_tete() # lst = 3 valeur renvoyée : 5
        10. lst.renvoie_tete()# lst = None valeur renvoyée : 3
        11. lst.est_vide()    #  valeur renvoyée : True
        ```        

    )
    }}    

-->
Nous avons vu ce qui défini les **interfaces** des **piles** et **files**, dans un premier temps, nous allons voir comment utiliser ces **interfaces**, puis comment les **implémenter**.

## 2. Interface - pile

![](data/gifpile.webp){: .center}

Comme expliqué précédemment, une pile travaille en mode LIFO (Last In First Out).
Pour être utilisée, l'interface d'une pile doit permettre a minima :

- la création d'une pile vide
- l'ajout d'un élément dans la pile (qui sera forcément "au dessus"). On dira qu'on **empile**.
- le retrait d'un élément de la pile (qui sera forcément celui du dessus) et le renvoi de sa valeur. On dira qu'on **dépile**.

### 2.1 Utilisation d'une interface de pile

!!! exercice "Exercice 1"

    On considère l'enchaînement d'opérations ci-dessous. 

    Bien comprendre que la classe ```Pile()``` et ses méthodes n'existent pas pour l'instant.

    :warning: On prendra pour convention que la tête de la pile est à droite.

    :writing_hand: Écrire à chaque étape l'état de la pile ```p``` et la valeur éventuellement renvoyée.

    ```python
    1. p = Pile() 
    2. p.empile(3)   
    3. p.empile(5)  
    4. p.est_vide()  
    5. p.empile(1)  
    6. p.depile()  
    7. p.depile() 
    8. p.empile(9)  
    9. p.depile()  
    10. p.depile() 
    11. p.est_vide() 
    ```


    ??? success "Correction"
        ```python
        1. p = Pile()  # p = None
        2. p.empile(3)   # p = 3
        3. p.empile(5)  # p = 3 5 par convention
        4. p.est_vide()  #  False
        5. p.empile(1)  # p = 3 5 1
        6. p.depile()  # p = 3 5    valeur renvoyée : 1
        7. p.depile()  # p = 3      valeur renvoyée : 5
        8. p.empile(9)  # p = 3 9
        9. p.depile()  # p = 3       valeur renvoyée :9
        10. p.depile()  # p est vide      valeur renvoyée : 3
        11. p.est_vide() # True
        ```        

!!! tip "A retenir : Interface Pile :heart:"
    <table>
    <thead>
    <tr>
    <th style="text-align: center;">fonction</th>
    <th style="text-align: left;">description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td style="text-align: center;"><code>creer_pile() -&gt; Pile[]</code></td>
    <td style="text-align: left;">crée une pile vide</td>
    </tr>
    <tr>
    <td style="text-align: center;"><code>est_vide(Pile[T]) -&gt; bool</code></td>
    <td style="text-align: left;">renvoie <code>True</code> si l'objet <code>p</code> de type <code>Pile[T]</code> est vide, <code>False</code> sinon.</td>
    </tr>
    <tr>
    <td style="text-align: center;"><code>empiler(Pile[T], elem) -&gt; None</code></td>
    <td style="text-align: left;">ajoute l'élément <code>elem</code> de type <code>T</code> au sommet de la pile <code>p</code>.</td>
    </tr>
    <tr>
    <td style="text-align: center;"><code>dépiler(Pile[T]) -&gt; elem</code></td>
    <td style="text-align: left;">retire et renvoie l'élément <code>elem</code> de type <code>T</code> situé au sommet de la pile <code>p</code>.</td>
    </tr>
    </tbody>
    </table>


### 2.2 Implémentation d'une pile

L'objectif est de créer une classe (en POO) ```Pile```. L'instruction  ```Pile()```  créera une pile vide. Chaque objet ```Pile``` disposera des méthodes suivantes :

- ```est_vide``` : indique si la pile est vide (renvoie un booléen)
- ```empile``` : insère un élément (passé en paramètre) en haut de la pile. Ne renvoie rien.
- ```depile``` : renvoie la valeur de l'élément en haut de la pile ET le supprime de la pile.

Ces 3 méthodes sont essentielles et se retrouveront systématiquement dans chaque interface. Nous y ajouterons, uniquement par commodité, la méthode suivante :

- ```__repr__``` : permet d'afficher la pile sous forme ascii (par ex : ```|3|6|2|5|```)

#### 2.2.1 À l'aide du type ```list``` de Python 

!!! exercice "Exercice 2"

    :writing_hand: Créez un nouveau dossier "Theme_2_structures_donnees", où vous stockerez vos fichiers python.
    :writing_hand: Créez un nouveau fichier python "pile.py", puis ouvrez le avec votre IDE (Thonny, VS code, Spyder, etc.)

    :writing_hand: Créer la classe ```Pile``` ci-dessus. 
    
    Le type ```list``` de Python est parfaitement adapté. [Rappels des méthodes](https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists){. target="_blank"}.

    ??? question "Un peu d'aide ? (code à trou)"
        Voici le code à trou de cette classe, à compléter : :
        ```python linenums='1'
        class Pile:
            def __init__(self):
                ... # on implémente notre pile à l'aide d'une liste
                
            def est_vide(self):
                ...
                
            def empiler(self, elem):
                ...
            
            def depiler(self):
                ... # ne pas oublier de vérifier que la pile n'est pas vide
            
        ```

        
    ??? success "Correction :heart: :heart:"
        ```python linenums='1'
        class Pile:
            def __init__(self):
                self.data = [] # on implémente notre pile à l'aide d'une liste
                
            def est_vide(self):
                taille = len(self.data)
                if taille > 0:
                    return False
                return True
                
            def empiler(self, elem):
                self.data.append(elem)
            
            def depiler(self):
                if self.est_vide():
                    return "Pile vide"
                return self.data.pop() # on n'est pas obligé de retourner l'element dépilé
            
            # Hors-Programme (ne pas retenir) : affichage ascii
            def __repr__(self):       
                s = '|'
                for k in self.data :
                    s = s + str(k) + '|'
                return s 
        ```

        On n'oublie pas de tester de l'**implémentation ** !!!!!!!!! :
        ```python
        p = Pile()
        p.empile(5)
        p.empile(3)
        p.empile(7)
        print(p)
        |5|3|7|
        ```        

Il y a d'autre manière d'implémenter une Pile, par exemple avec une [liste chaînée](https://fr.wikipedia.org/wiki/Liste_cha%C3%AEn%C3%A9e){: target ="_blank"}, ou encore le module ``deque`` de la bibliothèque [``collections``](https://docs.python.org/3/library/collections.html#deque-objects){: target="_blank"} (``from collections import deque``).  

![](data/xkcd.png){: .center .autolight}


### 2.2.2 Application des piles

!!! exercice "Exercice 3"

    Simulez une gestion de l'historique de navigation internet, en créant une classe ```Nav``` qui utilisera une pile.

    Attention, il ne faut pas réinventer la classe ```Pile```, mais uniquement s'en servir !
    
    Exemple d'utilisation :
    ```python 
    >>> n = Nav()
    >>> n.visite('legorafi.fr')
    page actuelle : legorafi.fr
    >>> n.visite('linux.com')
    page actuelle : linux.com
    >>> n.visite('https://gdemo-nsi.github.io/cours_nsi/')
    page actuelle : https://gdemo-nsi.github.io/cours_nsi/
    >>> n.back()
    page quittée : https://gdemo-nsi.github.io/cours_nsi/
    >>> n.back()
    page quittée : linux.com
    ```


    ??? success "Correction"
        ```python linenums='1'
        class Nav:
            def __init__(self):
                self.data = Pile()
            
            def visite(self, page):
                self.data.empile(page)
                print('page actuelle :', page)
            
            def back(self):
                if self.data.est_vide():
                    print('pas de back possible')
                else:
                    page_quittee = self.data.depile()
                    print('page quittée :', page_quittee)
        ```          


## 3. Interface - file

![](data/giffile.webp){: .center}

Comme expliqué précédemment, une file travaille en mode FIFO (First In First Out).
Pour être utilisée, une interface de file doit proposer a minima :

- la création d'une file vide
- l'ajout d'un élément dans la file. On dira qu'on **enfile**.
- le retrait d'un élément de la file et le renvoi de sa valeur. On dira qu'on **défile**.


La représentation la plus courante d'une file se fait horizontalement, en enfilant par la gauche et en défilant par la droite :

![image](data/repfile.png){: .center}


### 3.1 Utilisation d'une interface de file

!!! exercice "Exercice 4"

    On considère l'enchaînement d'opérations ci-dessous.  
    :writing_hand: Écrire à chaque étape l'état de la file ```f``` et la valeur éventuellement renvoyée.  

    :warning: Par convention, on enfilera **à gauche** et on défilera **à droite**.  
    ```python
    1. f = File()
    2. f.enfile(3) 
    3. f.enfile(5)
    4. f.est_vide()
    5. f.enfile(1) 
    6. f.defile() 
    7. f.defile()
    8. f.enfile(9) 
    9. f.defile() 
    10. f.defile()
    11. f.est_vide() 
    ```


    ??? success "Correction"
        ```python
        1. f est vide
        2. f = 3
        3. f = 5 3
        4. val renvoyée : False
        5. f  = 1 5 3
        6. val renvoyée : 3 , f = 1 5
        7. val renvoyée : 5 , f =  1 
        8. f =  9 1
        9. val renvoyée : 1 , f =  9 
        10. val renvoyée : 9 , f est vide  
        11. val renvoyée : True
        ```        


!!! tip "A retenir : Interface File :heart:"
    <table>
    <thead>
    <tr>
    <th style="text-align: center;">fonction</th>
    <th style="text-align: left;">description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td style="text-align: center;"><code>creer_file() -&gt; File[T]</code></td>
    <td style="text-align: left;">crée une pile vide</td>
    </tr>
    <tr>
    <td style="text-align: center;"><code>est_vide(File[T]) -&gt; bool</code></td>
    <td style="text-align: left;">renvoie <code>True</code> si l'objet <code>f</code> de type <code>File[T]</code> est vide, <code>False</code> sinon.</td>
    </tr>
    <tr>
    <td style="text-align: center;"><code>enfiler(elem, File[T]) -&gt; None</code></td>
    <td style="text-align: left;">ajoute l'élément <code>elem</code> de type <code>T</code> à la fin de la file <code>f</code>.</td>
    </tr>
    <tr>
    <td style="text-align: center;"><code>defiler(File[T]) -&gt; elem</code></td>
    <td style="text-align: left;">retire et renvoie l'élément <code>elem</code> de type <code>T</code> situé au début de la file <code>f</code>.</td>
    </tr>
    </tbody>
    </table>



### 3.2 Implémentation d'une file
L'objectif est de créer une classe ```File```, disposant des méthodes suivantes :

- ```est_vide``` : indique si la file est vide. (renvoie un booléen)
- ```enfile``` : insère un élément (passé en paramètre) en queue de file. (ne renvoie rien)
- ```defile``` : renvoie la valeur de l'élément en tête de la file ET le supprime de la file.

Nous y ajouterons comme précédemment la méthode facultative suivante :

- ```__repr__``` : permet d'afficher la file sous forme agréable (par ex : ```|3|6|2|5|```)


!!! exercice "Exercice 5"

    :writing_hand: Créez un nouveau fichier "*file.py*", dans votre dossier *"Theme_2_Structures_donnees*".  

    :writing_hand: Créer la classe ci-dessus. Là encore, le type ```list```  de Python est peut être utilisé.
    
    Penser à aller voir [ici](https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists){. target="_blank"} les méthodes des objets de types ```list```, notamment la méthode ```insert```.

    ??? question "Aide : Code à trou"
        class File:
            def __init__(self):
                ...
            
            def est_vide(self):
                ...
                    
            def enfile(self, elem):
                ...

            def defile(self):
                if self.est_vide():
                    ...
                ...

    ??? success "Correction :heart: :heart:"
        ```python linenums='1'
        class File:
            def __init__(self):
                self.data = []
            
            def est_vide(self):
                taille = len(self.data)
                if taille > 0:
                    return False
                return True
                    
            def enfile(self, elem):
                self.data.insert(0, elem) # position 0 (gauche de la liste)

            def defile(self):
                if self.est_vide():
                    return "File vide"
                return self.data.pop() 

            # Hors-Programme (ne pas retenir) : affichage ascii
            def __repr__(self):  
                s = '|'          
                for k in self.data:
                    s = s + str(k) + '|'
                return s
        ```
        On teste on teste !!!!!
        ```python
        f = File()
        f.enfile(5)
        f.enfile(8)
        f
        |8|5|
        f.defile()
        5
        ```        

## 4 Implémentation d'une file avec deux  ?!

Comment créer une file avec 2 piles ?  
L'idée est la suivante : on crée une pile d'entrée et une pile de sortie. 

- quand on veut enfiler, on empile sur la pile d'entrée.
- quand on veut défiler, on dépile sur la pile de sortie.
- si celle-ci est vide, on dépile entièrement la pile d'entrée dans la pile de sortie.


<center>
<gif-player src="../data/2piles1file.gif" speed="1" play></gif-player>
</center>


!!! exercice "Exercice"
    Créer une file avec deux piles.


    ??? success "Correction"
        ```python linenums='1'

        # Implémentation d'une file à l'aide de deux piles 

        class File:
            def __init__(self):
                self.entree = Pile()
                self.sortie = Pile()

            def est_vide(self):
                return self.entree.est_vide() and self.sortie.est_vide()

            def enfile(self, elem):
                self.entree.empile(elem)

            def defile(self):
                if self.est_vide():
                    print('File vide !')
                    return None

                if self.sortie.est_vide():
                    while not self.entree.est_vide():
                        self.sortie.empile(self.entree.depile())

                return self.sortie.depile()


        ```


        ```python
        >>> f = File()
        >>> f.enfile(5)
        >>> f.enfile(8)
        >>> f.defile()
        5
        ```
