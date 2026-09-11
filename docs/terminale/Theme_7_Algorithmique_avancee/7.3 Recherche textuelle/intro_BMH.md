# Vers Boyer-Moore-Horspool

L'idée est d'améliorer le code précédent (celui on parcourt le motif à l'envers) en **sautant** directement au prochain endroit potentiellement valide. 

Pour cela on regarde le caractère `X`  du texte sur lequel on s'est arrêté :

- si ```X``` n'est pas dans le motif, il est inutile de se déplacer "de 1" : on tomberait sur `X + 1`, donc `X` après la recherche à l'envers.  
&rarr; On se décale donc juste assez pour dépasser ```X```.  

- si ```X``` est dans le motif, on va regarder la place de la dernière occurence de ```X``` dans le motif et de déplacer de ce nombre, afin de faire coïncider le ```X``` du motif et le ```X``` du texte.

> &rarr; 3) Recherche à l'envers : [Lien vers déroulement](https://idf-75-sud.elea.apps.education.fr/mod/resource/view.php?id=22919)


On dispose de la fonction ```pre_traitement``` :  

!!! success "Correction" 
    ```python linenums='1'
    def pre_traitement(mot):
        d = {}
        for i in range(len(mot)-1):
            d[mot[i]] = i
        return d
    ``` 

*Exemple d'utilisation de la fonction ```BMH``` :*

```python
>>> BMH("une magnifique maison bleue", "maison")
[15]
>>> BMH("une magnifique maison bleue", "nsi")
[]
>>> BMH("une magnifique maison bleue", "ma")
[4, 15]
```
<div style="page-break-after: always;"></div>

!!! note "Très difficile :star: :star: :star: :star:"
    ```python linenums='1'
    def pre_traitement(mot):
        d = {}
        for i in range(len(mot)-1):
            d[mot[i]] = i
        return d

    def BMH(texte, motif):


    ```


!!! note "<font color=crimson>Difficile</font> :star: :star: :star:
    ```python linenums='1'
    def pre_traitement(mot):
        d = {}
        for i in range(len(mot)-1):
            d[mot[i]] = i
        return d

    def BMH(texte, motif):
        dico = ...
        indices = ...
        i = ...
        while ...:
            k = ...
            while ...: 
                ...
            if ...: 
                ...
                ...
            else:
                if ...: 
                    ...
                else:
                    ... 

        return ...

    ```
<div style="page-break-after: always;"></div>

!!! note "<font color=gold>Moyen</font> :star: :star:
    ```python linenums='1'
    def pre_traitement(mot):
        d = {}
        for i in range(len(mot)-1):
            d[mot[i]] = i
        return d

    def BMH(texte, motif):
        dico = ...
        indices = ...
        i = ...
        while i <= ... :
            k = ...
            while ... and ...: 
                ...
            if k == ...: 
                ...
                ... 
            else:
                if ... in dico: 
                    ...
                else:
                    ... 

        return ...

    ```

<div style="page-break-after: always;"></div>

!!! note "<font color=green>Facile</font>:star:
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
        while i <= ... - ...:
            k = ...
            while k >= 0 and texte[...] == motif[...]: 
                k = ...
            if k == ...: 
                indices.append(...)
                i = ...
            else:
                if ... in dico: 
                    i += max(..., 1) 
                else:
                    i += ...

        return ...

    ```
        



