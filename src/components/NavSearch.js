"use client";
import React from "react";
import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function NavSearch() {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      query: "",
    },
  });

  const onSubmit = (values) => {
    router.push(`/search/${values.query}`);
    form.reset();
  };

  return (
    <Form  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

      <FormField
        control={form.control}
        name="query"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Search" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        </form>
    </Form>
  );
}

export default NavSearch;
