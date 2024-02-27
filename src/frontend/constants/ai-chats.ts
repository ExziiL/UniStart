export const AI_CHATS = [
	{
		id: "1",
		messages: [
			{ role: "user", content: "Who won the world series in 2020?" },
			{ role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020." },
			{ role: "user", content: "Where was it played?" },
			{ role: "assistant", content: "It was played at Globe Life Field in Arlington, Texas." },
			{ role: "user", content: "Who was the MVP?" },
			{ role: "assistant", content: "Corey Seager was named the World Series MVP." },
			{ role: "user", content: "How many games did the series last?" },
			{ role: "assistant", content: "The series lasted six games." },
			{ role: "user", content: "Who did they play against?" },
			{ role: "assistant", content: "They played against the Tampa Bay Rays." },
			{ role: "user", content: "What was the score in the final game?" },
			{ role: "assistant", content: "The final game ended with a score of 3-1, in favor of the Dodgers." },
		],
		model: "gpt-3.5-turbo",
	},
	{
		id: "2",
		messages: [
			{ role: "user", content: "What programming languages should I learn for computer science?" },
			{
				role: "assistant",
				content:
					"It's beneficial to learn languages like Python, Java, and C++. Each has its own use cases and is commonly used in computer science education and the industry.",
			},
		],
		model: "gpt-3.5-turbo",
	},
	{
		id: "3",
		messages: [
			{ role: "user", content: "How can I manage my time effectively while studying at university?" },
			{
				role: "assistant",
				content:
					"Creating a study schedule, prioritizing tasks, and avoiding procrastination are key strategies. Also, make sure to allocate time for rest and social activities to maintain a healthy balance.",
			},
			{ role: "user", content: "Do you have any tips for creating a study schedule?" },
			{
				role: "assistant",
				content:
					"Certainly! Start by listing all your classes, assignments, and deadlines. Then, break down your study sessions into manageable chunks and assign them to specific times each day, ensuring you also schedule breaks to avoid burnout.",
			},
			{ role: "user", content: "How often should I take breaks?" },
			{
				role: "assistant",
				content:
					"It's generally recommended to take a short break every hour or so. The Pomodoro Technique suggests 25 minutes of focused work followed by a 5-minute break. Find a rhythm that works best for you.",
			},
			{ role: "user", content: "What should I do if I feel overwhelmed?" },
			{
				role: "assistant",
				content:
					"If you're feeling overwhelmed, take a step back and reassess your schedule. Make sure it's realistic and allows for flexibility. Don't hesitate to reach out for support from friends, family, or university counseling services.",
			},
		],
		model: "gpt-3.5-turbo",
	},
	{
		id: "4",
		messages: [
			{ role: "user", content: "What are some tips for living on a university campus?" },
			{
				role: "assistant",
				content:
					"Get to know your campus resources, stay organized, respect your roommates, and engage in campus activities to make the most of your university experience.",
			},
		],
		model: "gpt-3.5-turbo",
	},
	{
		id: "5",
		messages: [
			{ role: "user", content: "Are group projects important in computer science studies?" },
			{
				role: "assistant",
				content:
					"Yes, group projects are crucial as they simulate real-world team-based environments, helping you develop collaboration and communication skills essential for the tech industry.",
			},
			{ role: "user", content: "Can you give me examples of how they're beneficial?" },
			{
				role: "assistant",
				content:
					"Group projects often involve diverse tasks such as coding, testing, and presenting. They teach you how to divide work effectively, integrate different parts of a project, and handle varying opinions or conflicts within a team. These experiences are invaluable in preparing you for the collaborative nature of tech careers.",
			},
		],
		model: "gpt-3.5-turbo",
	},
	{
		id: "6",
		messages: [
			{ role: "user", content: "How can I prepare for programming interviews?" },
			{
				role: "assistant",
				content:
					"Practice coding problems on platforms like LeetCode, understand data structures and algorithms, and study system design. Mock interviews can also be very helpful.",
			},
		],
		model: "gpt-3.5-turbo",
	},
];
