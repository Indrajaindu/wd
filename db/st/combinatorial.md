# 排列與組合

## 排列

排列的公式：$P(n, r) = \frac{n!}{(n-r)!}$

## 組合

組合的公式： $C(n, r) = \frac{n!}{r! (n-r)!}$


## 不可區分物件的排列方式

不可區分排列： $\frac{n!}{n1!n2!...nk!}$

n = n1 + n2 + ... + nk

## R 程式

```R
> prod(5:1)
[1] 120
> prod(5:3)
[1] 60
> choose(5,3)
[1] 10
> choose(52, 4)
[1] 270725
```