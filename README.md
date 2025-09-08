# 🛒 DGShop – Ecommerce Sample Project

یک فروشگاه اینترنتی مدرن ساخته شده با **Next.js 15** که تکنولوژی‌های Fullstack و بهینه‌سازی SEO را ترکیب کرده است.  
این پروژه به عنوان نمونه‌کار حرفه‌ای برای رزومه توسعه داده شده است.  

🔗 **دمو آنلاین:** [DGShop on Vercel](https://dgshap-nxtcwvrta-simurghs-projects.vercel.app/)  

---

## ✨ ویژگی‌ها

- ⚡ **Next.js 15 (App Router)** – رندر سمت سرور و client-side routing  
- 🌐 **داینامیک روت‌ها** – صفحات محصول و جزئیات پویا  
- 🎨 **Tailwind CSS v4 + shadcn/ui** – استایل مدرن و سریع  
- 🔑 **Clerk Authentication** – ثبت‌نام/ورود و محافظت مسیرها  
- 🗄️ **Prisma ORM + PostgreSQL** – مدیریت دیتابیس با کوئری‌های بهینه  
- 📝 **React Hook Form + Zod** – مدیریت فرم‌ها با اعتبارسنجی پیشرفته  
- 🔄 **Server Actions + useActionState** – مدیریت فرم‌ها و عملیات CRUD  
- 📦 **سبد خرید (Cart)** با **React Query** برای کشینگ و state management  
- 🖼️ آپلود چند عکس برای محصول  
- ♻️ **ISR / Revalidation** برای تازه‌سازی بدون ری‌بیلد کامل  
- 🚀 **بهینه‌سازی SEO** – meta tags، title، description و structured data  
- 🌐 **دیپلوی روی Vercel**  

---

## 🛠️ تکنولوژی‌ها

- [Next.js 15](https://nextjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Prisma ORM](https://www.prisma.io/)  
- [PostgreSQL](https://www.postgresql.org/)  
- [React Hook Form](https://react-hook-form.com/)  
- [Zod](https://zod.dev/) – مدیریت اعتبارسنجی فرم‌ها  
- [useActionState (Next.js Server Actions)](https://beta.nextjs.org/docs/routing/server-actions)  
- [React Query](https://tanstack.com/query/latest) – مدیریت state و کش سبد خرید  
- [Clerk Auth](https://clerk.com/)  
- [Tailwind CSS v4](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  

---

## 📂 ساختار پوشه‌ها

```bash
src/
├── app/                
│   ├── api/            # API Routes (product, cart)
│   ├── dashboard/      # صفحات مدیریت محصول (محافظت‌شده با Clerk)
│   └── (auth)/         # مسیرهای مربوط به Clerk (sign-in, sign-up)
│
├── components/         
│   └── ui/             
│
├── lib/                # پیکربندی‌ها (Prisma, utils, Clerk server helpers)
├── styles/             
└── prisma/             # فایل schema.prisma
# کلون پروژه
git clone https://github.com/USERNAME/dgshop.git

cd dgshop

# نصب پکیج‌ها
npm install

# ساخت Prisma Client
npx prisma generate

# اجرای سرور توسعه
npm run dev


DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DBNAME"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
📌 درباره
این پروژه به عنوان نمونه‌کار توسط Simurgh ساخته شده است.
برای مشاهده سایر نمونه‌کارها و همکاری:

[GitHub](https://github.com/simurgh420)

ایمیل: mohamadrezah420@gmail.com
