"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import "./contact-dialog-custom-form.css";
import { useLocale } from "next-intl";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  companyName: z.string({ required_error: "This field is required" }).min(4, {
    message: "At least 4 characters.",
  }),
  companyCountry: z
    .string({ required_error: "This field is required" })
    .min(4, {
      message: "At least 4 characters.", // look for collection of states and change to selection component
    }),
  contactName: z.string({ required_error: "This field is required" }).min(6, {
    message: "At least 4 characters.",
  }),
  contactEmail: z.string({ required_error: "This field is required" }).email({
    message: "Invalid email address.",
  }),
  defProjDuration: z
    .string({ required_error: "This field is required" })
    .refine((value) => ["Yes", "No"].includes(value), {
      message: "Answers: Yes or Not.",
    }),
  expectProjDurationHours: z.string().optional(),
  explanation: z.string({ required_error: "This field is required" }).refine(
    (value) => {
      const wordCount = value.trim().split(/\s+/).length; // Count the number of words
      return wordCount <= 300; // Validate the word count
    },
    {
      message: "Project explanation should not exceed 300 words.",
    }
  ),
});

interface ContactDialogCustomForm {
  closeDialog: () => void;
}

const ContactDialogOndemandForm: React.FC<ContactDialogCustomForm> = (
  props
) => {
  const locale = useLocale();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyCountry: "",
      contactName: "",
      contactEmail: "",
      defProjDuration: "",
      expectProjDurationHours: "",
      explanation: "",
    },
  });

  const { isSubmitting, isSubmitSuccessful, errors } = form.formState;
  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const rawData = {
      companyName: data.companyName,
      companyCountry: data.companyCountry,
      contactName: data.contactName,
      contactEmail: data.contactEmail,
      defProjDuration: data.defProjDuration,
      expectProjDurationHours: data.expectProjDurationHours,
      explanation: data.explanation,
    };

    try {
      const res = await fetch(`https://www.prosimcae.com/api/ondemand`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
      });
      console.log(res);
      if (!isSubmitting && res.status === 201) {
        toast({
          duration: 3000,
          title: "Submitted succesfully",
          description: "We will contact you very soon!",
        });
        props.closeDialog();
      }

      if (!isSubmitting && res.status !== 201) {
        toast({
          duration: 3000,
          variant: "destructive",
          title: "Error warning",
          description: "Try again later please",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="w-full flex flex-row justify-between max-md:mt-4">
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">Company name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="companyCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    Company country
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">Contact name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    Contact email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="defProjDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    Project Duration
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="max-md:text-xs">
                        <SelectValue
                          placeholder="Yes"
                          className="max-md:text-xs"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-md:text-xs">
                      <SelectItem value="Yes" className="max-md:text-xs">
                        Yes
                      </SelectItem>
                      <SelectItem value="No" className="max-md:text-xs">
                        No
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="max-md:text-xs" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="expectProjDurationHours"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">Expected (h)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="200"
                      {...field}
                      className="placeholder:text-xs max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="max-md:text-xs">
                Request explanation
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none h-28 max-md:text-xs placeholder:text-xs"
                  placeholder="Explain briefly your project request here please. We will contact you to know more details :)!"
                  {...field}
                />
              </FormControl>
              <FormMessage className="max-md:text-xs" />
            </FormItem>
          )}
        />

        <div className="w-full flex flex-row justify-end">
          <Button
            className="mr-0 mt-2"
            type="submit"
            disabled={isSubmitting ? true : false}
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : null}
            {isSubmitting ? "Please wait" : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactDialogOndemandForm;
