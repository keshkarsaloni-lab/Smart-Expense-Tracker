const express =
  require("express");

const router =
  express.Router();

const Transaction =
  require("../models/Transaction");



// ADD TRANSACTION
router.post(
  "/",
  async (req, res) => {

    try {

      console.log(req.body);

      const transaction =
        new Transaction({

          type:
            req.body.type,

          category:
            req.body.category,

          amount:
            Number(
              req.body.amount
            ),

          description:
            req.body.description,

        });

      await transaction.save();

      return res.status(201).json({

        success: true,

        message:
          "Transaction Added",

      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

        message:
          "Transaction Failed",

      });
    }
  }
);



// GET TRANSACTIONS
router.get(
  "/",
  async (req, res) => {

    try {

      const transactions =
        await Transaction.find();

      return res.json(
        transactions
      );

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        message:
          "Error",

      });
    }
  }
);



// DELETE TRANSACTION
router.delete(
  "/:id",
  async (req, res) => {

    try {

      await Transaction.findByIdAndDelete(
        req.params.id
      );

      return res.json({

        success: true,

      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

      });
    }
  }
);



// UPDATE TRANSACTION
router.put(
  "/:id",
  async (req, res) => {

    try {

      await Transaction.findByIdAndUpdate(

        req.params.id,

        {
          type:
            req.body.type,

          category:
            req.body.category,

          amount:
            Number(
              req.body.amount
            ),

          description:
            req.body.description,
        }

      );

      return res.json({

        success: true,

      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({

        success: false,

      });
    }
  }
);

module.exports = router;