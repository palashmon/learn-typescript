import { LikeComponent } from '../src/like.component';

let component = new LikeComponent(10, false);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
