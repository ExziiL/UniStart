"use client";

import { Button } from "@/frontend/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/frontend/components/ui/dialog";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/frontend/components/ui/form";
import { Input } from "@/frontend/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit3 } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CourseReviewsDialogProps extends React.HTMLAttributes<HTMLDivElement> {
	// reviews: Review[];
}

// Define Form Validation
const formSchema = z.object({
	headline: z.string().min(5).max(100),
	description: z.string().min(5).max(1000),
});

function CourseReviewsDialog({}: CourseReviewsDialogProps) {
	// Define Form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			headline: "",
			description: "",
		},
	});

	// Handle Form Submit
	const onSubmit = (data: z.infer<typeof formSchema>) => {
		console.log("Form Submitted");
		console.log(data);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">
					<Edit3
						size={16}
						className="mr-2"
					/>
					Write a Review
				</Button>
			</DialogTrigger>

			<DialogContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-4"
					>
						<DialogHeader>
							<DialogTitle>Leave a Review</DialogTitle>
							<DialogDescription>How would you rate this course?</DialogDescription>
						</DialogHeader>
						<div className="">
							<FormField
								control={form.control}
								name="headline"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Headline</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder="FormControl Placeholder"
											/>
										</FormControl>
										<FormMessage
											{...field}
											className="pt-1"
										/>
										<FormDescription>{/* This is the Form Description */}</FormDescription>
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button type="submit">Submit</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

export default CourseReviewsDialog;
