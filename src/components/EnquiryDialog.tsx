import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

interface EnquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EnquiryDialog = ({ open, onOpenChange }: EnquiryDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Enquire Now</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Fill in your details and our team will get back to you shortly
          </p>
        </DialogHeader>
        <ContactForm onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};
