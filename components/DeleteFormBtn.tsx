import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { MdOutlineDeleteOutline, MdOutlinePublish } from 'react-icons/md'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { useRouter } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';
import { toast } from './ui/use-toast';
import { DeleteForm } from '@/actions/form';

function DeleteFormBtn({ id }: { id: number }) {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  async function publishForm() {
    try {
      await DeleteForm(id);
      toast({
        title: "Success",
        description: "Your form is Deleted",
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <Button className="gap-2 text-white bg-gradient-to-r from-red-400 to-red-600">
          <MdOutlineDeleteOutline className="h-4 w-4" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. After deleting you will not be able to retrieve this form. 
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              startTransition(publishForm);
            }}
          >
            Proceed {loading && <FaSpinner className="animate-spin" />}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteFormBtn;