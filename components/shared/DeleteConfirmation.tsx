'use client'

import { useTransition } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

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
} from '../../components/ui/alert-dialog'

import { deleteEvent } from '../../lib/actions/event.actions'

export const DeleteConfirmation = ({ eventId }: { eventId: string }) => {
  const pathname = usePathname()
  let [isPending, startTransition] = useTransition()

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Image src="/assets/icons/delete.svg" alt="edit" width={20} height={20} />
      </AlertDialogTrigger>

      // ... (vorheriger Code)

      {/* @ts-ignore */}
      <AlertDialogContent>
        <div className="bg-white">
          {/* @ts-ignore */}
          <AlertDialogHeader>
            {/* @ts-ignore */}
            <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
            {/* @ts-ignore */}
            <AlertDialogDescription className="p-regular-16 text-grey-600">
              This will permanently delete this event
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* @ts-ignore */}
          <AlertDialogFooter>
            {/* @ts-ignore */}
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* @ts-ignore */}
            <AlertDialogAction
              onClick={() =>
                startTransition(async () => {
                  await deleteEvent({ eventId, path: pathname });
                })
              }
            >
              {isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>


    </AlertDialog>
  )
}