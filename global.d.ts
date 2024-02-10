type Messages = typeof import ("./messages/en.json")
type DeMessages = typeof import ("./messages/de.json")

declare interface IntlMessages extends Messages, DeMessages {}