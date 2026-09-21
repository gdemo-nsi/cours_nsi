# **Les fondamentaux Python**

---

## <span style="color:teal">Les opérateurs</span>

| Opérateur | Rôle | Exemple | Résultat |
|-----------|------|---------|----------|
| `+` | Addition | `3 + 2` | `5` |
| `-` | Soustraction | `3 - 2` | `1` |
| `*` | Multiplication | `3 * 2` | `6` |
| `/` | Division (réelle) | `7 / 2` | `3.5` |
| `//` | Division entière | `7 // 2` | `3` |
| `%` | Modulo (reste) | `7 % 2` | `1` |
| `**` | Puissance | `2 ** 3` | `8` |

!!! tip "Rappel"

    * `/` renvoie toujours un `float`
    * `//` renvoie la partie entière 'inférieur' (``2//3``  &rarr; `0` et non `1`)
    * `%` est très utilisé pour tester la parité : `n % 2 == 0`

---

## <span style="color:teal">Les conditions</span>

```python
if note >= 10:
    print("Admis")
elif note >= 8:
    print("Rattrapage")
else:
    print("Recalé")
```

!!! note "À retenir"

    * `elif` = "sinon si", il peut y en avoir plusieurs
    * `else` est optionnel et se place en dernier
    * Le bloc est délimité par l'**indentation**

---

## <span style="color:teal">Les fonctions</span>

```python
def carre(x):
    return x ** 2

resultat = carre(4)  # resultat = 16
```

!!! tip "Rappel"

    * `def` déclare une fonction, `return` renvoie une valeur  
    * Les paramètres sont des variables locales, qui n'existe que dans la fonction  
    * (Une fonction sans `return` renvoie `None`)

---

## <span style="color:teal">Les boucles</span>

### Boucle `for` — parcours par **valeur**

```python
for valeur in [3, 7, 2]:
    print(valeur)
```

### Boucle `for` — parcours par **indice**

```python
liste = [3, 7, 2]
for i in range(len(liste)):
    print(i, liste[i])
```

### Boucle `while`

```python
i = 0
while i < 5:
    print(i)
    i = i + 1
```

!!! note "À retenir"

    * Parcours par valeur &rarr; lorsqu'on s'intéresse **uniquement** aux valeurs de la liste
    * Parcours par indice &rarr; lorqu'on s'intéresse également à la **position** des éléments dans la liste
    * `for` : nombre d'itérations **connu** à l'avance
    * `while` : nombre d'itérations **inconnu**, dépend d'une condition

---

## <span style="color:teal">Les listes : parcours</span>

```python
notes = [12, 8, 15, 10]

# Par valeur
for note in notes:
    print(note)

# Par indice
for i in range(len(notes)):
    print(i, notes[i])

# Indice ET valeur
for i, note in enumerate(notes):
    print(i, note)
```

!!! tip "Rappel"

    * `enumerate()` donne l'indice **et** la valeur en même temps
    * Parcours par valeur → quand l'indice n'est pas utile
    * Parcours par indice → quand on doit modifier la liste ou comparer des positions

---

## <span style="color:teal">Compteurs et sommes</span>

!!! note "Principe général"

    Une variable s'initialise **avant** la boucle, puis se met à jour **à chaque tour**.

**Compteur** (compte des occurrences)

```python
compteur = 0
for note in notes:
    if note >= 10:
        compteur = compteur + 1
print(compteur)
```

**Somme** (cumule des valeurs)

```python
total = 0
for nombre in notes:
    total = total + nombre
print(total)
```

??? example "Résultats avec notes = [12, 8, 15, 10]"

    * `compteur` (notes ≥ 10) → `3`
    * `total` → `45`

!!! tip "Optimisation"

    * `compteur = compteur + 1` peut s'écrire `compteur += 1`
    * `total = total - nombre` peut s'écrire `total -= nombre`
    * etc.
