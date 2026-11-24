<!-- @format -->

# CineList (film-frontend)

Aplikasi katalog film berbasis React + Vite + Tailwind CSS.
Proyek ini dikembangkan bertahap sampai Pekan 14 menjadi aplikasi fullstack.

## Halaman

- Dashboard (ringkasan + grid kartu)
- Daftar Film (tabel)
- Tambah Film (form)

## Screenshot

### Desktop

![Dashboard MObile](docs/mobile-view-1.png)
![Dashboard MObile](docs/mobile-view-2.png)
![Dashboard MObile](docs/mobile-view-3.png)
![Dashboard MObile](docs/mobile-view-4.png)▐

### web

![Dashboard web](docs/web-view-1.png)
![Dashboard web](docs/web-view-2.png)
![Dashboard web](docs/web-view-3.png)

## Alasan memilih Tailwind CSS

Saya memilih Tailwind CSS karena aplikasi CineList berfokus pada tampilan kartu dan tabel yang perlu disesuaikan desainnya (tema film). Tailwind berbasis utility class sehingga styling bisa dilakukan langsung di JSX tanpa file CSS terpisah, cocok dengan arsitektur component React. Prefix responsif seperti sm:, md:, dan lg: memudahkan layout menyesuaikan mobile dan desktop. Berbeda dengan Bootstrap yang tampilannya sudah jadi dan cenderung seragam, Tailwind memberi kebebasan desain, dan hanya class yang dipakai yang masuk ke build akhir.
