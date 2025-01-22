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
import { useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { customContactForm } from "@/lib/content";

const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(20[0-9]{2})$/;

interface ContactDialogCustomForm {
  closeDialog: () => void;
}

export const ContactDialogCustomForm: React.FC<ContactDialogCustomForm> = (
  props
) => {
  const locale = useLocale();
  const t = useTranslations();

  const formSchema = useMemo(
    () =>
      z.object({
        companyName: z
          .string({ required_error: t(customContactForm.validation.required) })
          .min(4, {
            message: t(customContactForm.validation.minCharacters, { min: 4 }),
          }),
        companyCountry: z
          .string({ required_error: t(customContactForm.validation.required) })
          .min(4, {
            message: t(customContactForm.validation.minCharacters, { min: 4 }),
          }),
        contactName: z
          .string({ required_error: t(customContactForm.validation.required) })
          .min(6, {
            message: t(customContactForm.validation.minCharacters, { min: 6 }),
          }),
        contactEmail: z
          .string({ required_error: t(customContactForm.validation.required) })
          .email({
            message: t(customContactForm.validation.invalidEmail),
          }),
        complexity: z
          .string({ required_error: t(customContactForm.validation.required) })
          .refine((value) => ["Low", "Middle", "High"].includes(value), {
            message: t(customContactForm.validation.complexityLevels),
          }),
        estDeadline: z
          .string({ required_error: t(customContactForm.validation.required) })
          .refine((value) => dateRegex.test(value), {
            message: t(customContactForm.validation.invalidDateFormat),
          }),
        explanation: z
          .string({ required_error: t(customContactForm.validation.required) })
          .refine(
            (value) => {
              const wordCount = value.trim().split(/\s+/).length; // Count the number of words
              return wordCount <= 300; // Validate the word count
            },
            {
              message: t(customContactForm.validation.maxWords),
            }
          ),
      }),
    [t]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyCountry: "",
      contactName: "",
      contactEmail: "",
      complexity: "",
      estDeadline: "",
      explanation: "",
    },
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      props.closeDialog();
    }
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const res = await fetch(`${process.env.SITE_URL}/${locale}/api/custom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="w-full flex flex-row justify-between max-md:mt-4">
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    {t(customContactForm.labels.companyName)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs">
                    {fieldState.error ? t(fieldState.error.message) : null}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="companyCountry"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    {t(customContactForm.labels.companyCountry)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        customContactForm.placeholders.companyCountry
                      )}
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs">
                    {fieldState.error ? t(fieldState.error.message) : null}
                  </FormMessage>
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
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    {t(customContactForm.labels.contactName)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs">
                    {fieldState.error ? t(fieldState.error.message) : null}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    {t(customContactForm.labels.contactEmail)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs">
                    {fieldState.error ? t(fieldState.error.message) : null}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="complexity"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    {t(customContactForm.labels.projectComplexity)}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="max-md:text-xs">
                        <SelectValue className="max-md:text-xs" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-md:text-xs">
                      <SelectItem value="Low" className="max-md:text-xs">
                        {t("Low")}
                      </SelectItem>
                      <SelectItem value="Middle" className="max-md:text-xs">
                        {t("Middle")}
                      </SelectItem>
                      <SelectItem value="High" className="max-md:text-xs">
                        {t("High")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="max-md:text-xs">
                    {fieldState.error ? t(fieldState.error.message) : null}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="w-52 max-md:w-2/5">
            <FormField
              control={form.control}
              name="estDeadline"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="max-md:text-xs">
                    {t(customContactForm.labels.estimatedDeadline)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t(
                        customContactForm.validation.invalidDateFormat
                      )}
                      {...field}
                      className="placeholder:text-xs max-md:text-xs"
                    />
                  </FormControl>
                  <FormMessage className="max-md:text-xs">
                    {fieldState.error ? t(fieldState.error.message) : null}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="explanation"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="max-md:text-xs">
                {t(customContactForm.labels.projectExplanation)}
              </FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none h-28 max-md:text-xs placeholder:text-xs"
                  placeholder={t(
                    customContactForm.placeholders.projectExplanation
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage className="max-md:text-xs">
                {fieldState.error ? t(fieldState.error.message) : null}
              </FormMessage>
            </FormItem>
          )}
        />

        <div className="w-full flex flex-row justify-end">
          <Button className="mr-0 mt-2" type="submit">
            {t(customContactForm.buttons.submit)}
          </Button>
        </div>
      </form>
    </Form>
  );
};
