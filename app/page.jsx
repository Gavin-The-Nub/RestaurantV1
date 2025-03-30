import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/home.webp"
          alt="Restaurant interior"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Savor the Moment
          </h1>
          <p className="mb-8 max-w-md text-lg text-white/90 sm:text-xl">
            Experience culinary excellence with our seasonal menu featuring
            locally-sourced ingredients.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" asChild>
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/20 text-white hover:bg-black/30 hover:text-white/80"
              asChild
            >
              <Link href="/reservation">Make a Reservation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Specialties
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover our chef's carefully crafted signature dishes.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-3">
            {[
              {
                title: "Truffle Pasta",
                description:
                  "Handmade pasta with seasonal truffles and parmesan cream sauce.",
                image: "/m1.avif",
              },
              {
                title: "Grilled Sea Bass",
                description:
                  "Fresh sea bass with lemon herb butter and roasted vegetables.",
                image: "/m2.jpg",
              },
              {
                title: "Chocolate Soufflé",
                description:
                  "Warm chocolate soufflé with vanilla bean ice cream.",
                image: "/m3.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/menu" className="flex items-center">
                Full Menu
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-muted py-16">
        <div className="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Story
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Founded in 2010, our restaurant has been serving the community
              with passion and dedication. We believe in sustainable practices
              and supporting local farmers.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/about">About Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover">
            <Image
              src="/story.webp"
              alt="Restaurant team"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {/* Hours */}
            <div className="group flex flex-col items-center space-y-4 text-center bg-black/5 py-11 transition-all duration-300  hover:bg-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-180 ">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Hours</h3>
              <div className="space-y-2 text-gray-500 dark:text-gray-400">
                <p>Monday - Friday: 11am - 10pm</p>
                <p>Saturday - Sunday: 10am - 11pm</p>
              </div>
            </div>

            {/* Location */}
            <div className="group flex flex-col items-center space-y-4 text-center bg-black/5 py-11 transition-all duration-300  hover:bg-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-180 ">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Location</h3>
              <div className="space-y-2 text-gray-500 dark:text-gray-400">
                <p>123 Culinary Street</p>
                <p>Foodville, CA 90210</p>
              </div>
            </div>

            {/* Contact */}
            <div className="group flex flex-col items-center space-y-4 text-center sm:col-span-2 md:col-span-1 bg-black/5 py-11 transition-all duration-300 hover:bg-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-180   ">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Contact</h3>
              <div className="space-y-2 text-gray-500 dark:text-gray-400">
                <p>info@restaurant.com</p>
                <p>(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
