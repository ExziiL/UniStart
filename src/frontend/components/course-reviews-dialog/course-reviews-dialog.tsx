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
import { ScrollArea, ScrollBar } from "@/frontend/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/frontend/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/frontend/components/ui/tabs";
import { Textarea } from "@/frontend/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Rating } from "@smastrom/react-rating";
import { Edit3, ShieldAlert } from "lucide-react";
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
		headline: z.string().min(3).max(100),
		description: z.string().min(5).max(maxDescriptionLength),
		rating: z.number().min(1).max(5),
		focus: z.string().optional(),
		semester: z.string().min(0).max(12).optional(),
	});

	// Define Form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			headline: "",
			description: "",
			rating: 0,
			focus: "",
			semester: "0",
		},
	});

	// Handle Form Submit
	// integrate with backend here
	const onSubmit = (data: z.infer<typeof formSchema>) => {
		// console.log("Form Submitted: ", data);
		// integrate with backend here and wait for successful response

		// reset the form
		// TODO: in a later stage, we might want to show the user the data they entered and disable the submit button until they edit the form again
		form.reset({
			description: "",
			headline: "",
			rating: 0,
			focus: "",
			semester: "0",
		});
	};

	const handleSemesterChange = (value: string) => {
		form.setValue("semester", value);
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

			<DialogContent className="p-1">
				<ScrollArea className="h-[600px] sm:h-full">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="flex flex-col gap-4 p-2"
						>
							<DialogHeader>
								<DialogTitle>Create a Review</DialogTitle>
								<DialogDescription>How would you rate this course?</DialogDescription>
							</DialogHeader>
							<div className="flex flex-col gap-4">
								<FormField
									control={form.control}
									name="rating"
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
													className="h-24 resize-none"
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
								<FormField
									control={form.control}
									name="focus"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Focus</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select your course focus" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="Allgemeine Informatik">
														Allgemeine Informatik
													</SelectItem>
													<SelectItem value="Software Engineering">
														Software Engineering
													</SelectItem>
													<SelectItem value="Medieninformatik">Medieninformatik</SelectItem>
													<SelectItem value="IT-Security">IT-Security</SelectItem>
													<SelectItem value="Data Science">Data Science</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage className="pt-1" />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="semester"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Semester</FormLabel>
											<Tabs className="w-full">
												<TabsList className="w-full">
													<TabsTrigger
														value="1"
														className="w-full"
														onClick={() => handleSemesterChange("1")}
													>
														1
													</TabsTrigger>
													<TabsTrigger
														value="2"
														className="w-full"
														onClick={() => handleSemesterChange("2")}
													>
														2
													</TabsTrigger>
													<TabsTrigger
														value="3"
														className="w-full"
														onClick={() => handleSemesterChange("3")}
													>
														3
													</TabsTrigger>
												</TabsList>
											</Tabs>
											<FormMessage className="pt-1" />
										</FormItem>
									)}
								/>
							</div>

							<div
								className={`my-3 flex flex-row items-center gap-3 rounded-sm border border-destructive bg-orange-50 p-3 text-base text-orange-900 dark:bg-orange-950 dark:text-orange-50`}
							>
								<div>
									<ShieldAlert
										size={20}
										strokeWidth={1.75}
									/>
								</div>
								<p>
									Your review will be submitted and displayed{" "}
									<span className="underline">anonymously</span>.
								</p>
							</div>

							<DialogFooter className="gap-2">
								<DialogClose asChild>
									<Button variant="outline">Cancel</Button>
								</DialogClose>
								<Button type="submit">Submit</Button>
							</DialogFooter>
						</form>
					</Form>
					<ScrollBar orientation="vertical" />
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}

export default CourseReviewsDialog;
