"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { PutBlobResult } from "@vercel/blob";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
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
import { Button } from "../../ui/button";
import { useLocale } from "next-intl";

interface ResumeUploadFormProps {
  closeDialog: () => void;
}

export const ResumeUploadForm: React.FC<ResumeUploadFormProps> = (props) => {
  const locale = useLocale();
  const pdfFileSchema = z.object({
    fileUpload: z
      .instanceof(File)
      .refine(
        (file) => file.type === "application/pdf" && file.name.endsWith(".pdf"),
        {
          message: "The file must be a valid PDF.",
        }
      )
      .optional(),
  });
  const form = useForm({
    resolver: zodResolver(pdfFileSchema),
    defaultValues: {
      fileUpload: undefined,
    },
  });

  const onSubmit: SubmitHandler<{ fileUpload: File | undefined }> = async (
    data: z.infer<typeof pdfFileSchema>
  ) => {
    if (!data.fileUpload) {
      return;
    }
    const formData = new FormData();
    formData.append("fileUpload", data.fileUpload);
    props.closeDialog();
    const res = await fetch(
      `https://www.prosimcae.com/${locale}/api/resumeup`,
      {
        method: "POST",
        body: formData,
      }
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="fileUpload"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-4">Accept</Button>
      </form>
    </Form>
  );
};
