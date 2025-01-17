"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactDialogCustomForm } from "./contact-dialog-custom-form";
import { useState } from "react";
import { ResumeUploadForm } from "./resume-upload-form";

export const ResumeUploadDialog: React.FC = () => {
  const [switchDialog, setSwitchDialog] = useState<boolean>(false);

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
          Submit Your CV
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center mt-8 p-16">
        <DialogHeader>
          <DialogTitle className="mb-2">Upload your resume please</DialogTitle>
        </DialogHeader>
        <ResumeUploadForm closeDialog={() => setSwitchDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};
