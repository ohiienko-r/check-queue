# Queue - fast & simple check-items tracker.

_**This app is built for internal use.**_ 

## Introduction

The main purpose of Queue app is to simplify the interactions of senior engineers with PCBs & RFQs that require checks. 

App provides a user with a queue of elements. Each element represents a single so called "check-item" (either PCB or RFQ):

![pcb_queue](https://github.com/ohiienko-r/check-queue/assets/109099364/6dd13dcf-4822-4718-bcdc-54b97ae02431)

**App available only with existing internal user account. If you don't have any please contact your administrator.**

## Check-item

Each check-item consists of: 

![single_full_item](https://github.com/ohiienko-r/check-queue/assets/109099364/2791e310-389e-44eb-b5f9-c7257a0a75dd)

  A) Customer name;<br>
  B) Active link to either part or RFQ;<br>
  C) Item owner name;<br>
  D) Settings button;<br>
  E) Status indicator;<br>
  F) Creation date and time;<br>
  G) Status change button; <br>
  H) (Optional) Message with comments to the item;<br>

Item has three statuses: 

![queue_items](https://github.com/ohiienko-r/check-queue/assets/109099364/4c632ac2-fe3c-4abb-8aeb-388fcd1fcfc8)

- ```complete``` (green) - all checks complete;
- ```checking``` (orange) - item is currently being checked;
- ```open``` (red) - item is ready to be checked;

Each item is created with default status of ```open```.

Settings menu currently contains single option - ```Delete``` - which deletes item from database as well as from the queue: 

![single_item_with_menu](https://github.com/ohiienko-r/check-queue/assets/109099364/5da28535-78b2-4090-8ca6-05affd4b1088)

## Create new check-item

To create a new check-item first of all press that ```+``` button in the right bottom corner:

![create new item button](https://github.com/ohiienko-r/check-queue/assets/109099364/6c8a0aa2-99bc-420c-88ad-6ff28c430ae8)

It will open a modal window with a simple form to fill: 

![new_item_form](https://github.com/ohiienko-r/check-queue/assets/109099364/7e768443-dec6-42ee-afc5-75053bab5d4e)

- ```Customer``` - text input for a customer name;
- ```Link``` - text input for a link to either part or RFQ in CRM;
- ```Message``` (optional) - text input for comments to the check-item;

On submit new check item will be added to database and it will appear to the queue.
