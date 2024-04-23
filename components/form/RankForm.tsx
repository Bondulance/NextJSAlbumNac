"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(100),
  genre: z.string().min(2).max(20),
});

const RankForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      genre: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-n-400 font-semibold">
                Name of Rank list <span className="text-n-200">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  className="bg-n-100 border-n-300 border-2 text-n-400 rounded-md"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-n-400 font-semibold">
                Description of Rank list <span className="text-n-200">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Description"
                  className="bg-n-100 border-n-300 border-2 text-n-400 rounded-md"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-n-400 font-semibold">
                Genre of Rank list <span className="text-n-200">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Genre"
                  className="bg-n-100 border-n-300 border-2 text-n-400 rounded-md"
                  {...field}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-n-100 text-n-200 rounded-xl max-sm:items-center"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default RankForm;
