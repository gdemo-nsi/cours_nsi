# Vers la recherche textuelle naïve


Écrire une fonction ```recherche_naive``` qui prend en paramètres deux chaines de caractères ```texte``` et ```motif``` et qui renvoie la liste des indices (éventuellement vide) des occurrences de la chaîne `motif` dans la chaîne `texte`.


Exemple d'utilisation :
```python
>>> recherche_naive("une magnifique maison bleue", "maison")
[15]
>>> recherche_naive("une magnifique maison bleue", "nsi")
[]
>>> recherche_naive("une magnifique maison bleue", "ma")
[4, 15]
```


!!! note Très Difficile :star: :star: :star: :star:
    ```python linenums='1'
    def recherche_naive(texte, motif):
        '''
        renvoie la liste des indices (éventuellement vide) des occurrences de
        de la chaîne `motif` dans la chaîne `texte`.
        '''                       
    ``` 

!!! note <font color = red>Difficile </font>  :star: :star: :star: 
    ```python linenums='1'
    def recherche_naive(texte, motif):
        '''
        renvoie la liste des indices (éventuellement vide) des occurrences de
        de la chaîne `motif` dans la chaîne `texte`.
        '''
        indices = ...
        i = ...
        while ...:
            ...
            while ...:
                ...
            if ...:
                ...
            ...

        return ...                   
    ``` 







!!! note <font color= gold>Moyen</font> :star: :star:  
    ```python linenums='1'
    def recherche_naive(texte, motif):
        '''
        renvoie la liste des indices (éventuellement vide) des occurrences de
        de la chaîne `motif` dans la chaîne `texte`.
        '''
        indices = ...
        i = ...
        while i <= ...:
            k = ...
            while k < ... and ...:
                ...
            if ...:
                indices.append(...)
            i += ...

        return ...
                           
    ``` 



!!! note <font color=green>Facile</font> :star:
    ```python linenums='1'
    def recherche_naive(texte, motif):
        '''
        renvoie la liste des indices (éventuellement vide) des occurrences de
        de la chaîne `motif` dans la chaîne `texte`.
        '''
        indices = []
        i = 0
        while i <= ... - ...:
            k = ...
            while k < len(...) and texte[...] == motif[...]:
                k += ...
            if k == len(...):
                indices.append(...)
            i += ...

        return ...
                            
    ``` 
        



