"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const formSchema = z.object({
  item_id: z.string().min(2).max(50),
})

export default function RemoveItemPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      item_id: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { item_id } = values
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const itemRemoved = await fetch(
      `http://localhost:5000/api/items/${item_id}`,
      {
        method: "DELETE",
      }
    )
    console.log(values)
    console.log("itemRemoved: " + itemRemoved)
  }

  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Remove Item</CardTitle>
          <CardDescription>
            This action will remove an item from stock.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="item_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Item ID</FormLabel>
                    <FormControl>
                      <Input placeholder="item id#" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the ID number of the item you would like to remove.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </section>
  )
}
