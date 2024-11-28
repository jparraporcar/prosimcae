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
import { ContactDialogOndemandForm } from "./contact-dialog-ondemand-form";
import { useState } from "react";

export const ContactDialogOndemand: React.FC = () => {
  const [switchDialog, setSwitchDialog] = useState<boolean>(false);

  const handleSwitchDialog = () => {
    setSwitchDialog((prevState) => !prevState);
  };

  return (
    <Dialog onOpenChange={handleSwitchDialog} open={switchDialog}>
      <DialogTrigger asChild>
        <Button className="px-6 py-2 text-xl rounded-md shadow gradient-effect">
          Get In Touch
        </Button>
      </DialogTrigger>
      <DialogContent className="p-16 max-md:p-4 w-[600px] max-md:w-[340px] max-w-[600px] max-md:max-w-[340px]">
        <DialogHeader>
          <DialogTitle className="mb-2 max-md:text-base">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="max-md:text-xs">
            Please introduce the data indicated in the fields below and we will
            contact you as soon as posible
          </DialogDescription>
        </DialogHeader>
        <ContactDialogOndemandForm closeDialog={() => setSwitchDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};
