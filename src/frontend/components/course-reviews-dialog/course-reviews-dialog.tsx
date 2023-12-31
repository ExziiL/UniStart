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
import { Textarea } from "@/frontend/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Rating, SharedProps } from "@smastrom/react-rating";
import { Edit3 } from "lucide-react";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CourseReviewsDialogProps extends React.HTMLAttributes<HTMLDivElement> {
	// reviews: Review[];
}

function CourseReviewsDialog({}: CourseReviewsDialogProps) {
	const maxDescriptionLength = 500;

	// Define Form Validation
	const formSchema = z.object({
		headline: z.string().min(5).max(100),
		description: z.string().min(5).max(maxDescriptionLength),
		userRating: z.number().min(1).max(5),
	});

	// Define Form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			headline: "",
			description: "",
			userRating: 0,
		},
	});

	// Handle Form Submit
	// integrate with backend here
	const onSubmit = (data: z.infer<typeof formSchema>) => {
		console.log("Form Submitted: ", data);
		// integrate with backend here and wait for successful response

		// reset the form
		// TODO: in a later stage, we might want to show the user the data they entered and disable the submit button until they edit the form again
		form.reset({
			description: "",
			headline: "",
			userRating: 0,
		});
	};

	// TODO: add a loading state to the form
	// TODO: edit the form error messages
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
							<DialogTitle>Create a Review</DialogTitle>
							<DialogDescription>How would you rate this course?</DialogDescription>
						</DialogHeader>
						<div className="flex flex-col gap-4">
							<FormField
								control={form.control}
								name="userRating"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Overall Rating</FormLabel>
										<FormControl>
											<Rating
												{...field}
												value={field.value}
												style={{ maxWidth: 160 }}
												isRequired
											/>
										</FormControl>
										<FormMessage className="pt-1" />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="headline"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input
												placeholder="This course was..."
												{...field}
											/>
										</FormControl>
										<FormMessage className="pt-1" />
										<FormDescription>{/* This is the Form Description */}</FormDescription>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Describe your experience in more detail..."
												className="resize-none"
												{...field}
											/>
										</FormControl>
										<FormDescription className="pt-1">
											{`${field.value.length}/${maxDescriptionLength}`}
										</FormDescription>
										<FormMessage />
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