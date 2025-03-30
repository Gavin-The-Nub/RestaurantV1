import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Menu - Savor Restaurant",
  description:
    "Explore our seasonal menu featuring locally-sourced ingredients.",
};

// Sample menu data
const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        name: "Bruschetta",
        description:
          "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
        price: "$12",
        image: "/starters1.jpg",
      },
      {
        name: "Calamari",
        description:
          "Crispy fried calamari served with lemon aioli and marinara sauce",
        price: "$16",
        image: "/starters2.jpg",
      },
      {
        name: "Mushroom Arancini",
        description:
          "Crispy risotto balls filled with wild mushrooms and mozzarella",
        price: "$14",
        image: "/starters3.jpg",
      },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      {
        name: "Truffle Pasta",
        description:
          "Handmade pasta with seasonal truffles and parmesan cream sauce",
        price: "$28",
        image: "/main1.webp",
      },
      {
        name: "Grilled Sea Bass",
        description:
          "Fresh sea bass with lemon herb butter and roasted vegetables",
        price: "$32",
        image: "/main2.jpg",
      },
      {
        name: "Braised Short Rib",
        description:
          "Slow-cooked short rib with red wine reduction, served with creamy polenta",
        price: "$34",
        image: "/main3.jpg",
      },
      {
        name: "Mushroom Risotto",
        description:
          "Creamy arborio rice with wild mushrooms, truffle oil, and parmesan",
        price: "$26",
        image: "/main4.jpg",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla bean ice cream",
        price: "$14",
        image: "/deserts1.jpg",
      },
      {
        name: "Tiramisu",
        description:
          "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
        price: "$12",
        image: "/deserts2.jpg",
      },
      {
        name: "Panna Cotta",
        description: "Vanilla bean panna cotta with seasonal berry compote",
        price: "$10",
        image: "/desert3.webp",
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      {
        name: "Signature Cocktails",
        description: "Ask your server about our seasonal craft cocktails",
        price: "$14-18",
        image: "/drinks1.webp",
      },
      {
        name: "Wine Selection",
        description:
          "Extensive wine list featuring local and international selections",
        price: "Varies",
        image: "/drinks2.jpg",
      },
      {
        name: "Craft Beer",
        description: "Rotating selection of local craft beers",
        price: "$8-12",
        image: "/drinks3.jpg",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Our Menu
        </h1>
        <p className="text-lg text-muted-foreground">
          Our seasonal menu features locally-sourced ingredients prepared with
          care and creativity.
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="mb-8 flex w-full justify-center space-x-2 max-md:space-x-0 overflow-hidden">
            {menuCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 py-2"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {menuCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="space-y-8"
            >
              <div className="grid gap-8">
                {category.items.map((item, index) => (
                  <div key={index}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="sm:block">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="h-20 w-20 rounded-md object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold ">
                            {item.name}
                          </h3>
                          <div className="font-medium">{item.price}</div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < category.items.length - 1 && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-16 rounded-lg bg-muted p-6 text-center">
        <h2 className="text-xl font-semibold">Dietary Requirements</h2>
        <p className="mt-2 text-muted-foreground">
          We are happy to accommodate dietary restrictions and allergies. Please
          inform your server of any special requirements.
        </p>
      </div>
    </div>
  );
}
