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
import { createRankList } from "@/lib/actions/rank.action";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  mongoUserId: string;
}

const RankForm = ({ mongoUserId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const formSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(100),
    genre: z.string().min(2).max(20),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      genre: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      await createRankList({
        title: values.title,
        description: values.description,
        genre: values.genre,
        author: mongoUserId,
        path: pathname,
      });
      router.push("/rank/:id");
    } catch (error) {
      console.log(error);
      throw error;
    }
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
          {IsSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default RankForm;
