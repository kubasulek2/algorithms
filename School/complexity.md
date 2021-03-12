# Sortowanie bąbelkowe
	a) wersja zwykła

	F(N) = (N − 1)⋅(N − 1) = N^2 − 2N +1
	lim x -> inf = (N^2 − 2N +1)/n^2 = 1     O(n^2)

  b) wersja ulepszona

	(N–1) + (N–2) + (N–3) + … + 1 =   N*(N–1)/2 = (n^2 - n)/2
	O(1/2n^2) = O(n^2)


# Największa przekątna w wielokącie wypukłym
  a) brute force

	(N–1) + (N–2) + (N–3) + … + 1 =   N*(N–1)/2 = (n^2 - n)/2	   O(n^2)

	b) obracanie pary prostych równoległych
	F(N) = O(N)


# wieże hanoi

T(1) = 1
T(N) = 2T(N − 1) + 1

F(N) = 2N − 1 = O(2N)


# Sortowanie drzewiaste budowa plus przegląd
	a) drzewo niezbalansowane
	- budowa
	1 + 2 + …(N–2) + (N–1) =   N*(N–1)/2 = (n^2 - n)/2	   O(n^2)
	- obejście 
	O(n)
	-całość
	O(n^2 + n) = O(n^2)

	b) drzewo samorganizujące się

	- budowa
	O(n*log(n))
	- obejście 
	O(n)
	-całość
	O(n*log(n) + n) = O(n*log(n))

# Sortowanie przez scalanie
	T(1) = 0
	T(N) = 2⋅T(N / 2) + N
	F(N) = N⋅lg N = O(N⋅lg N)

# wyznaczanie powłoki wypukłej	

Algorytm „brute force” ma złożoność O(N^3) :
dla każdego z N punktów trzeba dobierać kolejno po jednym
z pozostałych N−1 punktów i sprawdzać czy dla prostej, która
przechodzi przez taką parę reszta punktów ( N−2 ) leży tylko po
jednej jej stronie; F(N) = N⋅(N−1)⋅(N−2) = O(N^3)