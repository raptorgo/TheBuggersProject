import {Component, OnInit} from '@angular/core';
import {DialogExempleComponent} from '../dialog-exemple/dialog-exemple.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counter = 0;
  users = [
    {
      name: '1',
      avatar: 'svg-11',
      details: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage ' +
      'cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta ' +
      'who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue ' +
      'castello caerphilly chalk and cheese. Lancashire.',
      isAdmin: true,
      isCool: false
    },
    {
      name: '2',
      avatar: 'svg-12',
      details: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata ' +
      'corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor ' +
      'dictum mauris.',
      isAdmin: false,
      isCool: true
    },
    {
      name: '3',
      avatar: 'svg-13',
      details: 'Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney\'s ' +
      'blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats ' +
      'chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. ' +
      'Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter ' +
      'Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack ' +
      'literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.',
      isAdmin: true,
      isCool: true
    },
    {
      name: '4',
      avatar: 'svg-14',
      details: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill ' +
      'a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. ' +
      'Always hungry pelt around the house and up and down stairs chasing phantoms.',
      isAdmin: false,
      isCool: false
    },
    {
      name: '5',
      avatar: 'svg-10',
      details: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku ' +
      'wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
      isAdmin: false,
      isCool: true
    },
    {
      name: '6',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '7',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '8',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '9',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '10',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '11',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '12',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '13',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }, {
      name: '13',
      avatar: 'svg-16',
      details: 'Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? ' +
      'Get a new driver\'s license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ' +
      'ac magna justo pellentesque ac lectus. You don\'t go out and make a living dressed like that in the ' +
      'middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit ' +
      'malesuada.',
      isAdmin: true,
      isCool: true
    }
  ];

  increment(count: number): number {
    console.log(count);
    let temp = count + 1;
    console.log(temp);
    return temp;
  }

  check(count: number): boolean {
    if (count == 0) {
      return true;
    } else {
      if (count % 3 == 0) {
        return true;
      }
    }
    return false;
  }

  checkO(count: number): boolean {
    if (this.users[count + 1]) {
      return true;
    }
    return false;
  }

  trackByFn;
  // trackByFn(index, item) {
  //   return index;
  // }
  constructor(private dialog: MatDialog) {
    console.log('User');
  }

  openDialog(): void {
    this.dialog.open(DialogExempleComponent, {
      width: '99%',
      height: '90%'
    }).afterClosed();
  }
  ngOnInit() {
  }

}
