"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactDialogOndemandForm } from "./contact-dialog-ondemand-form";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { dialogGetInTouchButton } from "@/lib/content";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const ContactDialogOndemand: React.FC = () => {
  const [switchDialog, setSwitchDialog] = useState<boolean>(false);
  const t = useTranslations();

  const handleSwitchDialog = () => {
    setSwitchDialog((prevState) => !prevState);
  };

  return (
    <Dialog onOpenChange={handleSwitchDialog} open={switchDialog}>
      <DialogTrigger asChild>
        <Button className="px-6 py-2 mb-4 text-xl max-md:text-base rounded-md shadow gradient-effect">
          {t(dialogGetInTouchButton)}
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="p-16 max-md:p-4 w-[600px] max-md:w-[340px] max-w-[600px] max-md:max-w-[340px]"
      >
        <DialogTitle className="mb-2 max-md:text-base">
          {t(dialogGetInTouchButton)}
        </DialogTitle>
        <VisuallyHidden asChild>
          <DialogDescription>
            Fill the content in this form to send a request for our on-demand
            engineering services
          </DialogDescription>
        </VisuallyHidden>
        <ContactDialogOndemandForm closeDialog={() => setSwitchDialog(false)} />
      </DialogContent>
    </Dialog>
  );
};
