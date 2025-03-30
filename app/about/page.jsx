import Image from "next/image";

import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About - Savor Restaurant",
  description:
    "Learn about our restaurant's story, team, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Story
        </h1>
        <p className="text-lg text-muted-foreground">
          Founded with a passion for exceptional food and memorable dining
          experiences.
        </p>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Beginning</h2>
          <p className="leading-relaxed text-muted-foreground">
            Savor was founded in 2010 by Chef Maria Rodriguez with a simple
            mission: to create a restaurant that celebrates the bounty of local
            ingredients while providing an exceptional dining experience.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            What started as a small bistro has grown into a beloved culinary
            destination, but our commitment to quality, creativity, and
            hospitality remains unchanged.
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="/story2.jpg"
            alt="Restaurant interior"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Separator className="my-16" />

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="mt-4 text-muted-foreground">
            Our talented team brings together years of culinary expertise and a
            shared passion for hospitality.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Maria Rodriguez",
              role: "Executive Chef & Founder",
              bio: "With over 20 years of culinary experience, Maria brings her passion for seasonal ingredients and global flavors to every dish.",
              image: "/team1.jpg",
            },
            {
              name: "James Chen",
              role: "Head Chef",
              bio: "James specializes in combining classic techniques with innovative approaches to create unforgettable dining experiences.",
              image: "/team2.jpg",
            },
            {
              name: "Sophia Kim",
              role: "Pastry Chef",
              bio: "Sophia's creative desserts blend traditional pastry techniques with unexpected flavors and artistic presentation.",
              image: "/team3.webp",
            },
          ].map((person, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-full">
                <Image
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{person.name}</h3>
              <p className="text-sm text-primary">{person.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-16" />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Philosophy</h2>
          <div className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              At Savor, we believe that exceptional food starts with exceptional
              ingredients. We work closely with local farmers, fishermen, and
              producers to source the finest seasonal ingredients.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our commitment to sustainability extends beyond our menu to every
              aspect of our operation, from energy-efficient kitchen equipment
              to our comprehensive recycling and composting program.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Most importantly, we believe that dining is about more than just
              food—it's about creating memorable experiences and bringing people
              together around the table.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Community Involvement</h2>
          <div className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              We're proud to be an active member of our community. Through our
              partnerships with local schools and non-profit organizations, we
              work to promote culinary education and food security.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our annual fundraising dinner has raised over $100,000 for local
              food banks, and our apprenticeship program provides valuable
              training and experience for aspiring chefs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
