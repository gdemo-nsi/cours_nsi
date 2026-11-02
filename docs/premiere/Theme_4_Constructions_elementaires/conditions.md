# 1.2 Instruction conditionnelle if

!!! tip "Les conditions en python (If)"
    L'instruction conditionnelle `if` permet de soumettre l'exécution d'instructions à une condition donnée.  
    :warning: Cette condition renvoie une expression booléenne (`True` ou `False`).


## 1. Exemples fondateurs

!!! example "Comprendre l'indentation :heart:"
    En python, **l'indentation** est crutiale. Elle est défini par une tabulation (ou 4 espaces).  ![tab](data/tab.png){: .right width=15%}  

    L'indentation permet de *'séparer'* le code en **bloc d'éxecution**. Peut être que vous vous souvenez de scratch : ![scratch](data/scratch.png){: .right width="30%"}  

    ___ 
    Voici un outil pour comprendre l'importance des indentations en python :  
    *cliquez dessus* &rarr; **[Outil indentation](data/outil_indentation.html){: target ="_blank"}** :star:

    Nous utiliserons cette outil pour tester les conditions du cours.



Dans les exemples ci-dessous, changez la valeur affectée à la variable ```age``` afin d'observer les modifications de comportement du programme.


!!! note "Exemple 1"
    L'exemple minimal ci-dessous ne contient que le mot-clé ```if```. 
    ```python  linenums="1"
    age = 20
    if age >= 18:
        print("Tu as le droit de vote")
    ```

!!! note "Exemple 2"
    La structure qu'on rencontrera le plus souvent est la structure ```if ... else ...``` 

    ```python linenums="1"
    age = 20
    if age >= 18:
        print("Tu as le droit de vote")
    else:
        print("Désolé, il faudra attendre", 18 - age, "ans avant de pouvoir voter")
    ```

!!! abstract "**Syntaxe générale :heart:**"
    ```
    if expression booléenne:
        *instructions à effectuer si l'expression est vraie*
    else:
        *instructions à effectuer si l'expression est fausse*
    ```


## 2. L'évaluation de la condition

On dit que l'expression qui suit le ```if``` est **évaluée** par Python lors de l'exécution du programme.

Cette évaluation renvoie un booléen, ```True``` ou ```False```.  

&rarr; :writing_hand: Exemple de débug avec Thonny !

Les symboles de comparaison (ou d'appartenance) permettant d'écrire une condition sont :

!!! info inline  "Opérateurs de comparaison :heart: "
    |Opérateur|Signification|
    |:-:|:-:|
    |`==`| est égal à|
    |`!=`|est différent de|
    |`<`|inférieur à|
    |`>`|supérieur à|
    |`<=`|inférieur ou égal à|
    |`>=`|supérieur ou égal à|
    |`in`| appartient à|
    |`not in`| n'appartient pas à|

!!! note "Exemples"
    ```python
    >>> a = 2

    >>> a == 3
    False

    >>> a == 2
    True

    >>> a != 1
    True

    >>> a > 2
    False

    >>> a >= 2
    True

    >>> a <= 2
    True

    >>> a <= 5
    True

    >>> 'e' in 'abracadabra'
    False

    >>> 'b' in 'abracadabra'
    True

    >>> 'A' not in 'abracadabra'
    True

    >>> not True
    False





    ```

!!! example "And et Or"    
    Comme nous le verrons dans le cours sur les booléens, ces conditions peuvent être combinées avec (par exemple) les mots-clés ``` and``` ou ``` or``` :

    ```python
    >>> b = 20
    >>> b > 15 and b < 30
    True
    >>> b > 2000 or b < 30
    True
    ```
<!--
!!! example "{{ exercice() }}"
    

    Compter le nombre de voyelles de la phrase ```'cet exercice est prodigieusement ennuyeux'``` 

    ```python linenums='1'
    phrase = 'cet exercice est prodigieusement ennuyeux'
    voyelles = 'aeiouy'


    ```

    {{
    correction(True,
    """
    ??? success \"Correction\" 
        ```python linenums='1'
        phrase = 'cet exercice est prodigieusement ennuyeux'
        voyelles = 'aeiouy'

        compteur = 0

        for lettre in phrase:
            if lettre in voyelles:
                compteur += 1
                
        print(compteur)
        ```        
    """
    )
    }}

-->

## 3. Un test très fréquent : le test de divisibilité


!!! note "Exemple 3"
    Pour tester si un nombre ```n``` est divisible par un nombre ```d```, on teste si le reste de la division euclidienne de ```n``` par ```d``` est égal à 0 :

    > L'opérateur `%` est un modulo (le reste de la division entière)

    ```python
    n = 17
    if n % 2 == 0:
        print(n, "est un nombre pair")
    else:
        print(n, "est un nombre impair")
    ```     


## 4. Les cas multiples : utilisation de `elif` 

![image](data/cascade.webp){: .center width=40%}


Dans les situations où l'on veut effectuer des instructions différentes selon les différentes valeurs prises par une variable, on peut imbriquer les instructions `if` ... `else`.

Observer par exemple le code ci-dessous :

```python linenums='1'
moyenne = 13

if moyenne < 8:
    print("raté")
else:
    if moyenne < 10:
        print("repêchage")
    else:
        if moyenne < 12:
            print("admis")
        else:
            if moyenne < 14:
                print("mention AB")
            else:
                if moyenne < 16:
                    print("mention B")
                else:
                    print("mention TB")
```


Mais cela est vite long et peu lisible, et les différents niveaux d'indentation peuvent devenir piégeux.

Il existe alors une instruction qui contracte `else` et `if` : `elif` (sinon si).

Ce code devient alors

```python linenums="1"
moyenne = 7

if moyenne < 8:
    print("raté")
elif moyenne < 10:
    print("repêchage")
elif moyenne < 12:
    print("admis")
elif moyenne < 14:
    print("mention AB")
elif moyenne < 16:
    print("mention B")
else:
    print("mention TB")

```


## 5. Test de rapidité 🥇🥈🥉

!!! success "Execubot"
    Maintenant que vous avez compris comment fonctionne les conditions, je dois **3 points bonus** au prochain contrôle.  

    **Rendez vous sur ce site : [ExecuBot](https://execubot.fr/game?levels=1+2+37+47+5+7+21+26+10+12+38+43+40+41+42+48+50+53+51+54+60+63+17+45+59+64+58+39+49+55){: target="_blank"}**

    &rarr; Les 3 premièr.e.s élèves qui terminent les 30 niveaux gagnent un point bonus !