"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ResumeUploadForm } from "./resume-upload-form";
import { useTranslations } from "next-intl";

export const ResumeUploadDialog: React.FC = () => {
  const [switchDialog, setSwitchDialog] = useState<boolean>(false);
  const t = useTranslations("resumeUploadDialog");

  const handleSwitchDialog = () => {
    setSwitchDialog((prevState) => !prevState);
  };

  return (
    <Dialog onOpenChange={handleSwitchDialog} open={switchDialog}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-gray-500 text-gray-700 bg-gray-200 hover:bg-gray-500 text-xl"
        >
          {t("submitButton")}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center mt-8 p-16">
        <DialogHeader>
          <DialogTitle className="mb-2">{t("dialogTitle")}</DialogTitle>
        </DialogHeader>
        <ResumeUploadForm closeDialog={() => setSwitchDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};
