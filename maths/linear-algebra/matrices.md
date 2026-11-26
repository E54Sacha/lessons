---
title: Matrices
subject: maths
topic: linear-algebra
difficulty: beginner
created: 2026-11-26
source: general
quiz: matrices.quiz.json
---

# Matrices

## The idea

A matrix is a table of numbers arranged in rows and columns, like a small spreadsheet. It lets you store many related numbers together and work on all of them at once. Matrices are used to solve systems of equations, move and rotate shapes in video games, and store data such as images. Once you know the rules for adding and multiplying them, you can treat a whole table almost like a single number.

## Key words

- **Matrix:** a rectangular grid of numbers, written inside big brackets.
- **Entry:** one single number inside the matrix (also called an element).
- **Size:** the number of rows times the number of columns, written "rows × columns" (a 2 × 3 matrix has 2 rows and 3 columns).
- **Matrix addition:** adding two matrices of the same size, entry by entry.
- **Matrix multiplication:** combining two matrices by taking a row of the first and a column of the second.

## How it works

1. Write the numbers in a grid. Rows go left to right, columns go top to bottom.
2. Name its size: rows first, then columns. Always in that order.
3. To add two matrices, they must have the same size. Add the entries that sit in the same place.
4. To multiply a matrix by a plain number, multiply every entry by that number.
5. To multiply two matrices A × B, the number of columns of A must equal the number of rows of B. Each entry of the result = one row of A "times" one column of B: multiply the pairs of numbers and add them up. If A is 2 × 3 and B is 3 × 4, the result is 2 × 4 (the outer numbers).
6. Order matters: A × B is usually not the same as B × A.

## Example

Take two 2 × 2 matrices:

```
A = | 2  1 |      B = | 1  4 |
    | 0  3 |          | 2  5 |
```

**Addition** (same place, add): A + B = | 2+1  1+4 | / | 0+2  3+5 | = | 3  5 | / | 2  8 |.

**Multiplication** A × B, row times column:

- top-left = row 1 of A · column 1 of B = 2×1 + 1×2 = **4**
- top-right = row 1 of A · column 2 of B = 2×4 + 1×5 = **13**
- bottom-left = row 2 of A · column 1 of B = 0×1 + 3×2 = **6**
- bottom-right = row 2 of A · column 2 of B = 0×4 + 3×5 = **15**

So A × B = | 4  13 | / | 6  15 |. If you compute B × A the same way, you get | 2  13 | / | 4  17 |: a different answer, so the order really matters.

## Why use it

- ✅ Stores many numbers in one neat object and handles them all with one operation.
- ✅ Turns big systems of equations into one short line, which computers can solve fast.
- ⚠️ Multiplication rules are less intuitive than for normal numbers: sizes must match and order matters.

## Other ways

- **Writing equations one by one:** fine for 2 or 3 small equations, but it gets messy quickly as they grow.
- **Vectors:** a single row or column of numbers, enough when you only need a list rather than a full table.

## Quiz

1. A matrix is a rectangular grid of numbers arranged in rows and _____.
2. A matrix has 2 rows and 3 columns. How do we write its size?
   - A) 3 × 2
   - B) 2 × 3
   - C) 6
   - D) 2 + 3
3. Each single number inside a matrix is called an _____.
4. Is it true that you can add any two matrices, even if their sizes are different?
5. How do you add two matrices of the same size?
6. What happens when you multiply a matrix by the number 3?
   - A) Only the first row is multiplied by 3
   - B) The matrix gets 3 more rows
   - C) Every entry is multiplied by 3
   - D) Only the numbers on the diagonal are multiplied by 3
7. How do you find one entry of the product of two matrices?
8. Is it true that to multiply A by B, the number of columns of A must equal the number of rows of B?
9. A is a 2 × 3 matrix and B is a 3 × 4 matrix. What is the size of A × B?
   - A) 3 × 3
   - B) 2 × 3
   - C) 4 × 2
   - D) 2 × 4
10. Is it true that A × B always gives the same result as B × A?
11. Why are matrices useful?

<details>
<summary>Answers</summary>

1. **columns.** A matrix is organised in rows (across) and columns (down).
2. **B.** The size is always written rows first, then columns. A) is the tempting mistake of putting columns first.
3. **entry.** An entry (or element) is one number at one position in the grid.
4. **No, false.** Addition is done entry by entry, so both matrices need exactly the same number of rows and columns.
5. You add the entries that are in the same position. For example, the top-left of the result is the top-left of the first plus the top-left of the second.
6. **C.** Multiplying by a plain number scales every entry. A) is tempting, but the rule applies to the whole matrix, not one row.
7. You take one row of the first matrix and one column of the second, multiply the numbers pair by pair, and add the results.
8. **Yes, true.** Each row of A is paired with each column of B, so they must contain the same number of values.
9. **D.** The inner numbers (3 and 3) must match, and the outer numbers (2 and 4) give the size of the result. A) is tempting, but 3 × 3 uses the inner numbers instead of the outer ones.
10. **No, false.** Matrix multiplication usually depends on order; in the example, A × B and B × A gave different matrices.
11. They hold many related numbers in one object and let you work on all of them at once, which helps solve systems of equations, move shapes in graphics, and store data.

</details>

## What to ask about next

- The identity matrix and the inverse of a matrix
- The determinant of a matrix
- Using matrices to solve systems of equations
